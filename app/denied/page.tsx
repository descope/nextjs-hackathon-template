import Link from "next/link"


export default function Denied() {
    return (
        <div className="page space">
            <h1 className="title">Access Denied</h1>
            <Link className="underline" href={"/"}>/Home</Link>
        </div>
    )
}