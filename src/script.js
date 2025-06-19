async function fetchThought() {
  try {
    const res = await fetch('data.json'); 
    const data = await res.json();       

    const posts = data.data.children;     
    const todayIndex = new Date().getDate() % posts.length;
    const thought1 = posts[todayIndex].data.title;
    const thought2 = posts[todayIndex+1].data.title;  
    const thought3 = posts[todayIndex+2].data.title;  

    document.getElementById('quote').innerHTML = `
      <ul class="flex flex-col">
        <li class="bg-white/40 rounded-xl m-5 p-2">&#128293; ${thought1}</li>
        <li class="bg-white/40 rounded-xl m-5 p-2">&#128293; ${thought2}</li>
        <li class="bg-white/40 rounded-xl m-5 p-2">&#128293; ${thought3}</li>
      </ul>
    `;
  } catch (err) {
    document.getElementById('quote').textContent = "Failed to load quote.";
    console.error("Fetch error:", err);
  }
}

fetchThought();
