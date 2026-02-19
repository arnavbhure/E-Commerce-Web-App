export const FetchProducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
    if(!res.ok) throw new Error("Failed to Fetch Products");
    return res.json();
}