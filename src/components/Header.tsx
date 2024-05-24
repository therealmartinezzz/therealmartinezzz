"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { LuScrollText } from "react-icons/lu";

import { BsSuitcaseLg } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  type MenuList = {
    title: string;
    path: string;
    icon: ReactNode;
  };
  const isActive = (path: string): Boolean => {
    return pathname.startsWith(path) ? true : false;
  };
  let menu: MenuList[] = [
    {
      title: "Layihələr",
      path: "/works",
      icon: <BsSuitcaseLg />,
    },
    {
      title: "Bloq",
      path: "/blog",
      icon: <LuScrollText />,
    },
    {
      title: "Haqqımda",
      path: "/about",
      icon: <ImProfile />,
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="w-full h-14 flex items-center text-white justify-between overflow-visible ">
      <Link href={"/"} className="font-mono text-lg">
        Aziz Imranzade
      </Link>
      <ul className="sm:flex hidden gap-x-6 ">
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className={`hover:text-white/80 flex items-center gap-x-2 transition-all relative group ${isActive(item.path) && "text-white"}`}
            >
              {item.icon}
              <span
                className={`flex h-[1px] bg-white rounded-full absolute bottom-0 group-hover:w-full transition-all ${isActive(item.path) ? "w-full" : "w-0"}`}
              ></span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <>
        <IoIosMenu
          className="text-2xl sm:hidden flex"
          onClick={() => {
            onOpen();
          }}
        />
        <Modal
          hideCloseButton
          isOpen={isOpen}
          size="full"
          onOpenChange={onOpenChange}
          className="text-white"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex  gap-1 items-center justify-between">
                  <Link
                    href={"/"}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    Aziz Imranzade
                  </Link>
                  <IoIosClose
                    className="text-2xl"
                    onClick={() => {
                      onClose();
                    }}
                  />
                </ModalHeader>
                <ModalBody>
                  <ul className=" h-full flex justify-center items-center gap-y-8 flex-col">
                    {menu.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          onClose();
                        }}
                      >
                        <Link
                          href={item.path}
                          className={`hover:text-white/80 flex items-center gap-x-2 transition-all relative group ${isActive(item.path) && "text-white"}`}
                        >
                          {item.icon}
                          <span
                            className={`flex h-[1px] bg-white rounded-full absolute bottom-0 group-hover:w-full transition-all ${isActive(item.path) ? "w-full" : "w-0"}`}
                          ></span>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </header>
  );
};
export default Header;
