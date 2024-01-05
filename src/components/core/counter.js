import { Button } from "@/src/components/core/mui-tailwind";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";


const CounterButtons = ({count,setCount,min,max}) => {

	return (
		<div className="flex items-center">
			<Button
				className="shadow-none bg-[#808080] bg-opacity-30 hover:shadow-none p-2 rounded-md"
				disabled={count === min ? min : 0}
				onClick={() => {
          if(min){
            if(count <= min){
              setCount(min);
            }else{
              setCount(count-1);
            }
          }else{
            if (count <= 0 || count - 1 === 0) {
              setCount(0);
            } else {
              setCount(count - 1);
            }
          }
				}}
			>
				<MinusIcon className="w-[10px] h-[10px] text-black" strokeWidth={3} />
			</Button>
			<input
				type="text"
				className="text-sm text-black font-mabry-medium px-2 w-[30px] focus:outline-none"
				value={count}
				onChange={(e) => setCount(e.target.value)}
				placeholder="1"
			/>
			<Button
				className="shadow-none bg-[#808080] bg-opacity-30 hover:shadow-none p-2 rounded-md"
				onClick={() => {
          if(max){
            if(count + 1 <= max){
              setCount(count+1)
            }else{
              setCount(count)
            }
          }else{
            setCount(count + 1)
          }
        }}
			>
				<PlusIcon className="w-[10px] h-[10px] text-black" strokeWidth={3} />
			</Button>
		</div>
	);
};

export default CounterButtons;
