

 type Buttonprops={
    variant:"black"|"gradient" ;
    size: "sm"|"md" | "lg";
    onClick?:()=>void;

    children: React.ReactNode;
}

let defaultstyle=" cursor-pointer text-white px-[28px] py-[12px] rounded-[5px] h-[44px] flex items-center justify-center font-poppins text-[16px] font-medium  whitespace-nowrap ";

let sizestyle = {
  sm: "w-[127px]",
  md: "w-[143px]",
  lg: "w-[198px]",
};


let variantstyle = {
  black: "bg-black",
  gradient: "bg-gradient-to-r from-[#FF9898] to-[#8054FF]",
};



export const Button=({children,variant,size,onClick}:Buttonprops) => {
    return(
        <button className={` ${defaultstyle} ${variantstyle[variant]}  ${sizestyle[size]} `} onClick={onClick} >{children}</button>
    )



}