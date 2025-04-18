"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

import { defaultMemes } from "@/data/memes";
import { Meme } from "@/types/index";
import { title } from "@/components/primitives";

export default function MemeList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const cookieMemes = Cookies.get("memes");

    try {
      setMemes(cookieMemes ? JSON.parse(cookieMemes) : defaultMemes);
    } catch {
      setMemes(defaultMemes);
    }
  }, []);

  return (
    <section className="min-h-screen px-4">
      <h1 className={(title(), "mb-6 text-2xl font-bold text-center")}>
        Meme Table
      </h1>

      <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
        {memes.map((meme) => (
          <Card
            key={meme.id}
            className="border border-gray-200 rounded-xl"
            shadow="sm"
          >
            <CardHeader className="p-0">
              <Image
                isZoomed
                alt={meme.title}
                className="object-cover rounded-t-xl"
                src={meme.image_url}
              />
            </CardHeader>

            <CardBody className="p-4">
              <p className="text-lg font-semibold">{meme.title}</p>
              <p className="text-sm text-gray-400">Likes: {meme.likes}</p>
            </CardBody>
            <CardFooter className="p-4">
              <Link
                className="text-sm text-blue-500 hover:underline"
                href={meme.image_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Full Image
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
