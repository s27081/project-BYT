import Link from 'next/link'

export default async function ExercisePage({params}){
    const slug = (await params).slug

    const slugNumber = parseInt(slug, 10);
    if (isNaN(slugNumber) || slugNumber <= 0 || slugNumber >= 21) {
        throw new Error('Page Not Fund');
    }

    return (
        <>
        <Link href="/">Dashboard</Link>
        <h1>Hello World : {slug}</h1>
        </>
    )
}