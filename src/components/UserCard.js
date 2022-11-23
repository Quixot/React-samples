import React from "react"

export default function UserCard() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? "211930_star_icon.png" : "211823_star_icon.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src={process.env.PUBLIC_URL + "/images/user.png"} className="card--image" alt="user" />
                <div className="card--info">
                    <img 
                        src={process.env.PUBLIC_URL + `/images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt="star"
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
