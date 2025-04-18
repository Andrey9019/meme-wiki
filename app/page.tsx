import MemeTable from "@/components/MemeTable";

export default function App() {
  return <MemeTable />;
}
// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
// } from "@heroui/table";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "@heroui/modal";
// import { useDisclosure } from "@heroui/modal";
// import Cookies from "js-cookie";
// import { Button } from "@heroui/button";
// import { Input } from "@heroui/input";

// import EditIcon from "@/app/EditIcon";
// import { Meme } from "@/types/index";
// import { defaultMemes } from "@/data/memes";
// import { title } from "@/components/primitives";

// const columns = [
//   { name: "NAME", uid: "name" },
//   { name: "URL IMAGE", uid: "image" },
//   { name: "LIKES", uid: "likes" },
//   { name: "ACTIONS", uid: "actions" },
// ];

// export default function App() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const [hasMounted, setHasMounted] = useState(false);
//   const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
//   const [memes, setMemes] = useState<Meme[]>(() => {
//     try {
//       const cookieMemes = Cookies.get("memes");

//       return cookieMemes ? JSON.parse(cookieMemes) : defaultMemes;
//     } catch (error) {
//       console.error("Error parsing memes from cookies:", error);

//       return [];
//     }
//   });

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const isValidImageUrl = (url: string) => {
//     try {
//       const parsed = new URL(url);

//       return (
//         (parsed.protocol === "http:" || parsed.protocol === "https:") &&
//         url.toLowerCase().endsWith(".jpg")
//       );
//     } catch {
//       return false;
//     }
//   };
//   const handleEdit = (meme: Meme) => {
//     onOpen();
//     setSelectedMeme(meme);
//   };

//   const handleChange = (key: keyof Meme, value: string) => {
//     if (!selectedMeme) return;
//     setSelectedMeme({
//       ...selectedMeme,
//       [key]: key === "likes" ? parseInt(value) : value,
//     });
//   };

//   const handleSave = () => {
//     if (!selectedMeme) return;

//     if (!isValidImageUrl(selectedMeme.image_url)) {
//       alert("Invalid image URL");

//       return;
//     }

//     const updated = memes.map((meme) =>
//       meme.id === selectedMeme.id ? selectedMeme : meme
//     );

//     setMemes(updated);
//     Cookies.set("memes", JSON.stringify(updated), { expires: 30 });

//     onOpenChange();
//   };

//   const renderCell = useCallback((meme: Meme, columnKey: string | number) => {
//     switch (columnKey) {
//       case "name":
//         return <div>{meme.title}</div>;
//       case "image":
//         return (
//           <div className="flex flex-col">
//             <p className="text-sm capitalize text-bold text-default-400">
//               {meme.image_url}
//             </p>
//           </div>
//         );
//       case "likes":
//         return (
//           <div className="flex flex-col items-center">
//             <p className="text-sm capitalize text-bold text-default-400">
//               {meme.likes}
//             </p>
//           </div>
//         );
//       case "actions":
//         return (
//           <Button onPress={() => handleEdit(meme)}>
//             <span className="flex items-center justify-center gap-2 text-lg cursor-pointer text-default-400 ">
//               <EditIcon />
//             </span>
//           </Button>
//         );
//       default:
//         return null;
//     }
//   }, []);

//   if (!hasMounted) {
//     return null;
//   }

//   return (
//     <>
//       <section>
//         <h1 className={(title(), "mb-6 text-2xl font-bold text-center")}>
//           Meme Table
//         </h1>

//         <Table aria-label="Example table with custom cells">
//           <TableHeader columns={columns}>
//             {(column) => (
//               <TableColumn
//                 key={column.uid}
//                 align={column.uid === "actions" ? "center" : "start"}
//               >
//                 {column.name}
//               </TableColumn>
//             )}
//           </TableHeader>
//           <TableBody items={memes}>
//             {(item) => (
//               <TableRow key={item.id}>
//                 {(columnKey) => (
//                   <TableCell>{renderCell(item, columnKey)}</TableCell>
//                 )}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </section>

//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">
//                 Edit Meme
//               </ModalHeader>
//               <ModalBody>
//                 <p>ID: {selectedMeme?.id}</p>
//                 <Input
//                   isRequired
//                   label="Title"
//                   maxLength={100}
//                   minLength={3}
//                   value={selectedMeme?.title ?? ""}
//                   variant="bordered"
//                   onChange={(e) => handleChange("title", e.target.value)}
//                 />
//                 <Input
//                   isRequired
//                   label="Image URL"
//                   value={selectedMeme?.image_url ?? ""}
//                   variant="bordered"
//                   onChange={(e) => handleChange("image_url", e.target.value)}
//                 />
//                 <Input
//                   isRequired
//                   label="Likes"
//                   max={99}
//                   min={0}
//                   type="number"
//                   value={selectedMeme?.likes.toString() ?? "0"}
//                   variant="bordered"
//                   onChange={(e) => handleChange("likes", e.target.value)}
//                 />
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={handleSave}>
//                   Save
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
