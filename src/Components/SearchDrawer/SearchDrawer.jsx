"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Drawer, Input } from "@heroui/react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

export function SearchDrawer() {
  const [query, setQuery] = useState("");
  const [bottoms, setBottoms] = useState([]);
  const [formalshirt, setFormalshirt] = useState([]);
  const [dress, setDress] = useState([]);
  const [westrent, setWestrent] = useState([]);
  const [panjabi, setPanjabi] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`/bottoms.json`).then((res) => res.json()).then(setBottoms);
    fetch(`/formalshirt.json`).then((res) => res.json()).then(setFormalshirt);
    fetch(`/dress.json`).then((res) => res.json()).then(setDress);
    fetch(`/westrent.json`).then((res) => res.json()).then(setWestrent);
    fetch(`/panjabi.json`).then((res) => res.json()).then(setPanjabi);
  }, []);

  const allItems = [...bottoms, ...formalshirt, ...dress, ...westrent, ...panjabi];

  const filtered = query
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function goToProduct(item) {
    router.push(`/product/${item.slug}`);
  }

  return (
    <Drawer>
      <Button variant="">
        <IoSearchOutline size={30} />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right" className={'z-[9999]'}>
          <Drawer.Dialog>
            <Drawer.CloseTrigger>
              <IoCloseOutline size={26} />
            </Drawer.CloseTrigger>
            <Drawer.Header className="mt-20">
              <Drawer.Heading>Search</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <Input
                placeholder="Search here..."
                value={query}
                className={'w-full border'}
                onChange={(e) => setQuery(e.target.value)}
              />

              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-4">
                {filtered.map((item, index) => (
                <Link href={`/products`}  key={index}>

                  <div
                   
                    className="cursor-pointer rounded-lg border p-2"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-full rounded object-cover"
                    />
                    <p className="mt-1 text-sm">{item.title}</p>
                  </div>
                </Link>
                ))}
              </div>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}