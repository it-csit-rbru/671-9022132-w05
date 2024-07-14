
export default function AssignmentCard({imgURL,imgName,imgText}){
    return (
        <div className="bg-slate-400 border border-solid border-rose-100">
            <h2>{imgName}</h2>
            <img src={imgURL} alt={imgName} />
            <p>{imgText}</p>
        </div>
    );
}