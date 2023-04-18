
/* eslint-disable no-unused-vars */
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import getRandomPrompts from '../utils/getRandomPrompts';
import Image from 'next/image';
import FormField from '@/components/FormField';
import Loader from '@/components/Loader';
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { CollectionRef, db } from './api/config';


export default function CreatePost() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  }); 
  const preview = 'https://firebasestorage.googleapis.com/v0/b/chat-dos-otarios.appspot.com/o/greador%20de%20imagens%20APP%2Fload.png?alt=media&token=2b7dda9a-5396-479e-8550-7617c6b6b2e8';
  const randomPrompts = getRandomPrompts('');
  const [isGenerateImg, setIsGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    return setForm({ ...form, prompt: randomPrompts });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        await addDoc(CollectionRef,form)
        router.push('/');
      } catch (error) {
        
        console.error('Erro ao enviar o formulário:', error);
      } finally {
        setLoading(false);
      }
    } else{
      alert('preencha os campos para gerar a imagem')
    }
  };

 async function generateImg() {
  if (form.prompt) {
    try {
      setIsGenerateImg(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/routes/OpenIARoutes`, {
        prompt: form.prompt,
      });
      const data = response.data;
      setForm({ ...form, photo: `${data.photo}` });
    } catch (error) {
      alert(error);
    } finally {
      setIsGenerateImg(false);
    }
  } else {
    alert("Por favor digite uma frase para gerar a imagem");
  }
}

  return (
    <section className="max-w-7xl mx-auto  ">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Criar</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[5000px]">
          Crie uma coleção de imagens visualmente impressionantes geradas por
          Inteligência Artificial e compartilhe-as com a comunidade.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormField
          labelName="Seu Nome"
          type="text"
          name="name"
          value={form.name}
          handleChange={onHandleChange}
        />
        <FormField
          labelName="Digite abaixo o texto para o qual você deseja gerar uma imagem:"
          type="text"
          name="prompt"
          placeholder=' Digite palavras-chave que descrevem sua imagem. Clique no botão supreenda para ver um exemplo'
          value={form.prompt}
          handleChange={onHandleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />
       
       <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            { form.photo ? (
              <Image
                src={form.photo}
                alt={form.prompt}
                width={1024}
                height={1024}
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={preview}
                alt="preview"
                width={500}
                height={500}
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {isGenerateImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {isGenerateImg ? 'Gerando Imagem...' : 'Gerar nova imagem'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Depois de criar a imagem desejada, você pode compartilhá-la com
            outros na comunidade **
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Compartilhando...' : 'Compartilhe com a comunidade'}
          </button>
        </div>
      </form>
    </section>
  )
}
