export default function Status({ accepted }: { accepted: boolean }) {
    return (
        <div className="col shadow-gray-300 shadow-lg mb-6">
            <p className="px-8 py-6 w-full bg-[#efefef] text-2xl">Status: &nbsp;
            {accepted ? 
                <span className="text-green-600">Accepted! :D</span>
            :
                <span className="text-orange-500">Application Pending</span>
            }
            </p>
        </div>
    )
}
