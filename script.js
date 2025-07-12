/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const messageDiv = document.getElementById('message');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const offer = document.getElementById('offer').value;
        const want = document.getElementById('want').value;
  
        if (name && offer && want) {
          messageDiv.innerText = `✅ Profile for ${name} submitted successfully!`;
          form.reset();
        } else {
          messageDiv.innerText = "❌ Please fill all fields.";
          messageDiv.style.color = "red";
        }
      });
    }
  });
  function toggleDark() {
    document.body.classList.toggle("dark-mode");
  }
*/
// ---------- script.js (पूरी फ़ाइल) ----------
document.addEventListener('DOMContentLoaded', () => {
    /* ───────────── Profile Page (create-profile.html) ───────────── */
    const form         = document.getElementById('profileForm');
    const messageDiv   = document.getElementById('message');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const name  = document.getElementById('name').value.trim();
        const offer = document.getElementById('offer').value.trim();
        const want  = document.getElementById('want').value.trim();
  
        if (name && offer && want) {
          messageDiv.style.color = 'green';
          messageDiv.innerText   = `✅ Profile for ${name} submitted successfully!`;
          form.reset();
        } else {
          messageDiv.style.color = 'red';
          messageDiv.innerText   = '❌ Please fill all fields.';
        }
      });
    }
  
    /* ───────────── Browse Page (browse.html) ───────────── */
    const profilesContainer = document.getElementById('profilesContainer');
    const userCountElem     = document.getElementById('userCount');
    const searchBox         = document.getElementById('searchBox');
  
    if (profilesContainer) {
      /* Dummy user data */
      const users = [
        { name: 'Anjali', offer: 'Cooking',  want: 'Python',          availability: 'Weekends', rating: 4 },
        { name: 'Riya',   offer: 'Excel',    want: 'Photoshop',       availability: 'Evenings', rating: 4 },
        { name: 'Aman',   offer: 'Guitar',   want: 'Coding',          availability: 'Weekends', rating: 4 },
        { name: 'Kabir',  offer: 'Painting', want: 'Public Speaking', availability: 'Evenings', rating: 4 }
      ];
  
      /* Helper → render stars */
      const renderStars = (n) => '⭐'.repeat(n) + '☆'.repeat(5 - n);
  
      /* Render cards + user-count */
      const showProfiles = (list) => {
        if (userCountElem) userCountElem.innerText = `Total Users: ${list.length}`;
        profilesContainer.innerHTML = '';
  
        list.forEach(u => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <h3>${u.name}</h3>
            <p><strong>Offers:</strong> ${u.offer}</p>
            <p><strong>Wants:</strong> ${u.want}</p>
            <p><strong>Availability:</strong> ${u.availability}</p>
            <p><strong>Rating:</strong> ${renderStars(u.rating)}</p>
            <button>Send Request</button>
          `;
          /* Alert on button click */
          card.querySelector('button').addEventListener('click', () =>
            alert(`Swap Request Sent to ${u.name}`)
          );
          profilesContainer.appendChild(card);
        });
      };
  
      /* Initial render */
      showProfiles(users);
  
      /* Live search / filter */
      if (searchBox) {
        searchBox.addEventListener('keyup', () => {
          const q = searchBox.value.toLowerCase();
          const filtered = users.filter(u =>
            u.offer.toLowerCase().includes(q) || u.want.toLowerCase().includes(q)
          );
          showProfiles(filtered);
        });
      }
    }
  });
  
  /* ───────────── Global: Dark-mode toggle (all pages) ───────────── */
  function toggleDark() {
    document.body.classList.toggle('dark-mode');
  }