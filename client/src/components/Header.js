//fetch data from api
async function getData() {
    const res = await fetch('/api')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default function Header() {
    const data = getData()
    console.log(data)
    return (
        //Header for a portfolio
        <div className="fullPageHeader">
            <div className="header">
                <div className="headerRight"></div>
                <div className="headerLeft">
                    <h1>Diwas Dhakal</h1>
                </div>
            </div>
        </div>
    )
}
