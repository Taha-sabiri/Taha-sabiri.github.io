import CircularText from "./_component/CircularText"

function Loading() {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center text-black ">
            <CircularText
                text="LET’S*GO*IN*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />
        </div>
    )
}

export default Loading