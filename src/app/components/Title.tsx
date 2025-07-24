type TitleProps = {
    label: string;
}

export const Title = ({ label }: TitleProps) => {
    return(
        <h1 className="w-max text-[14px] font-medium bg-white rounded-[2rem] px-[1rem] py-[2px]">
            {label}
        </h1>
    )
}
