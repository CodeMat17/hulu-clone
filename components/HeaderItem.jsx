function HeaderItem({ Icon, title}) {
    return (
        <div className="hover:text-white group w-12 sm:w-24 flex flex-col items-center justify-center cursor-pointer">
            <Icon className="h-6 w-6 group-hover:animate-bounce"/>
            <p className="mt-1 tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
