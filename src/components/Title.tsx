type TitleProps = {
    label: string;
}

export const Title = ({ label }: TitleProps) => {
    return(
        <h1 className="text-[20px] font-bold bg-white rounded-[2rem] px-[1rem] py-[0.5rem]">
            {label}
        </h1>
    )
}
