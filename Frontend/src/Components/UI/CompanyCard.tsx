type CompanyyCardProps = {
    companyName: string;
}


export const CompanyCard = ({companyName}:CompanyyCardProps) => {
  return (
   <div className="bg-black w-40 h-[92px] rounded-[10px] flex justify-between items-center ">
    <img src={companyName} alt="CompanyCard" className="mx-auto"/>

   </div>
  )
}
