import Comment from "./Comment"

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
        <h1 className="text-xll text-[var(--Accent)] underline">Comments</h1>
        <div className="flex items-center justify-between gap-3 w-full">
            <textarea placeholder="Share your thoughts..." className="w-full p-4 rounded-xl border focus:ring-1 ring-[0.5px] ring-[var(--Accent2)] border-[var(--secondary)]" fill=""/>
            <button className="bg-[var(--secondary)] hover:bg-[var(--Accent2)] font-medium rounded-xl px-10 py-4 cursor-pointer duration-200 hover:scale-105">Send</button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />

    </div>
  )
}

export default Comments