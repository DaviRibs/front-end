export default function PageWrapper({children}){
    return (
        <div className="w-full h-screen bg-white text-black">
            {children}
        </div>
    )

    }