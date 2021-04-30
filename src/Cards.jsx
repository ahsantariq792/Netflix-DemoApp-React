import react from 'react'
<link rel="stylesheet" href="index.css" />

function Cards(props) 
{
    return (
        <>
            <section>
                <div className="cards">
                    <div className="card">
                        <img src={props.imgsrc} alt="Title" />
                    </div>
                    <div className="card-info">
                        <span className="card-category">{props.category}</span>
                        <h3 className="card-title">{props.title}</h3>
                        <a href={props.link}>
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards;

