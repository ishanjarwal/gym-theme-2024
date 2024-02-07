import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


export const socials = [
    {
        icon: FaFacebookF,
        href: '/',
        title: 'Our Facebook',
    },
    {
        icon: FaInstagram,
        href: '/',
        title: 'Our Instagram',
    },
    {
        icon: FaTwitter,
        href: '/',
        title: 'Our Twitter',
    },
    {
        icon: FaYoutube,
        href: '/',
        title: 'Our Youtube',
    },
]

export const navLinks = [
    {
        label: "Home",
        href: "/",
        dropdown: false
    },
    {
        label: "Services",
        href: "/",
        dropdown: [
            {
                label: "Muscle Building",
                href: "/",
            },
            {
                label: "Fat Loss",
                href: "/",
            },
            {
                label: "Strength Training",
                href: "/",
            },
            {
                label: "Calesthenics",
                href: "/",
            },
            {
                label: "Zumba",
                href: "/",
            },
            {
                label: "Boxing and MMA",
                href: "/",
            },
        ]
    },
    {
        label: "About Us",
        href: "/",
        dropdown: [
            {
                label: "Our Mission",
                href: "/",
            },
            {
                label: "Our Trainers",
                href: "/",
            },
            {
                label: "Our Facilities",
                href: "/",
            },
            {
                label: "Our Branches",
                href: "/",
            },
        ]
    },
    {
        label: "Blog",
        href: "/",
        dropdown: [
            {
                label: "Latest Articles",
                href: "/",
            },
            {
                label: "Archive",
                href: "/",
            }
        ]
    },
];