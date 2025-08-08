type TitleProps = {
    label: string;
}

export const Title = ({ label }: TitleProps) => {
    return(
        <h1 className="w-full md:w-max text-[14px] md:text-2xl font-medium bg-white rounded-[2rem] px-[1rem] py-[2px] text-center">
            {label}
        </h1>
    )
}
