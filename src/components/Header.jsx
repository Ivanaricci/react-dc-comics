
const Header = () => {

    const links = [
        {
            id: 1,
            href: "#",
            label: "Characters",
            current: false,
        },
        {
            id: 2,
            href: "#",
            label: "Comics",
            current: true,
        },
        {
            id: 3,
            href: "#",
            label: "Movies",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "TV",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Games",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Collectibles",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Videos",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Fans",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "News",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "Shop",
            current: false,
        }
    ]

    return (
        <header>
            <div className="container header-top">
                <figure>
                    <img src="../src/assets/img/dc-logo.png" alt="Dc Comics" />
                </figure>
                <ul>
                    {/* <li><a href="#">characters</a></li>
                    <li><a href="#">comics</a></li>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">collectibles</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fans</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">shop</a></li> */}

                    {links.map((link) => (
                        <li key={`link-${link.id}`}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="jumbotron"></div>
        </header>
    )
}

export default Header

