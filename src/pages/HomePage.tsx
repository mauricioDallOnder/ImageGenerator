/* eslint-disable no-unused-vars */

import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { getDocs } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { CollectionRef } from "./api/config";

interface ImageDataProps {
  name: string;
  prompt: string;
  photo: string;
  id: string;
}

export interface IICardProps {
  title: string;
  DataCard: ImageDataProps[];
}
export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState<ImageDataProps[]>([]);
  const [searchText, setSearchText] = useState("");

  const RenderCarts = ({ title, DataCard }: IICardProps) => {
    useEffect(() => {
      const getImage = async () => {
        const data = await getDocs(CollectionRef);
        setAllPosts(data.docs.map((doc) => doc.data() as ImageDataProps));
      };

      getImage();
      // console.log(imagensData)
    }, []);

    return (
      <>
        {DataCard.length > 0
          ? DataCard.map((item, index) => (
              <>
                <Card
                  key={item.id}
                  name={item.name}
                  prompt={item.prompt}
                  photo={item.photo}
                />
              </>
            ))
          : null}
      </>
    );
  };
  return (
    <section className="max-w-7xl">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Coleção de imagens geradas por IA
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[5000px]">
          Navegue por uma coleção de imagens visualmente deslumbrantes geradas
          por Inteligência Artificial.
        </p>
      </div>
      <div className="mt-16"></div>

      <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
        Imagens já Criadas :
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-5">
  <RenderCarts title={"Posts"} DataCard={allPosts} />
</div>
    </section>
  );
}
