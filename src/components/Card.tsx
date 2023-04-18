/* eslint-disable @next/next/no-img-element */
interface CardProps {
  name: string;
  prompt: string;
  photo: string;
}

export default function Card({ name, prompt, photo }: CardProps) {
  return (
    <div className="rounded-xl group relative flex flex-col items-start p-0 shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={photo}
      alt={prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
          <p className="text-white text-sm">{name}</p>
        </div>
        
      </div>
    </div>
  </div>





  );
}
