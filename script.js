// ====== DATA: 6 produk per kategori (30 produk) dengan detail size & color ======
const PRODUCTS = [
  // FASHION (6)
  { 
    id: 'f1', 
    name: 'Kaos Polos Putih', 
    category: 'fashion', 
    price: 75000, 
    img: 'https://plus.unsplash.com/premium_photo-1690349404248-3ddd9be40eb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Putih', 'Hitam', 'Abu-abu'],
    description: 'Kaos polos berbahan katun combed premium, nyaman dipakai sehari-hari.'
  },
  { 
    id: 'f2', 
    name: 'Hoodie', 
    category: 'fashion', 
    price: 150000, 
    img: 'https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Hitam', 'Navy', 'Merah Marun'],
    description: 'Hoodie dengan bahan fleece tebal, cocok untuk cuaca dingin.'
  },
  { 
    id: 'f3', 
    name: 'Rok Denim', 
    category: 'fashion', 
    price: 110000, 
    img: 'https://i.pinimg.com/1200x/37/a1/b4/37a1b49ff8b212030d7dd287ce8f00ff.jpg',
    sizes: ['S', 'M', 'L'],
    colors: ['Biru Denim', 'Hitam', 'Abu'],
    description: 'Rok denim slim fit dengan kancing depan.'
  },
  { 
    id: 'f4', 
    name: 'Kemeja', 
    category: 'fashion', 
    price: 130000, 
    img: 'https://i.pinimg.com/736x/9d/7f/d1/9d7fd113638474852ee6ba03840c629c.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Putih', 'Biru muda', 'Striped'],
    description: 'Kemeja formal bahan katun Oxford.'
  },
  { 
    id: 'f5', 
    name: 'Sneakers Casual', 
    category: 'fashion', 
    price: 400000, 
    img: 'https://i.pinimg.com/736x/45/9f/ab/459fab5e7b66f2cc247f8a13b838f92b.jpg',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['Putih', 'Hitam', 'Navy'],
    description: 'Sneakers dengan sol karet yang nyaman untuk aktivitas sehari-hari.'
  },
  { 
    id: 'f6', 
    name: 'MonoSling', 
    category: 'fashion', 
    price: 85000, 
    img: 'https://i.pinimg.com/736x/7b/e0/cc/7be0cc45f0ce462dd4082c8c54a71fca.jpg',
    sizes: ['One Size'],
    colors: ['Hitam', 'Coklat', 'Hijau Army'],
    description: 'Tas selempang minimalist dengan beberapa kompartemen.'
  },

  // ELEKTRONIK (6)
  { 
    id: 'e1', 
    name: 'Headphone Wireless', 
    category: 'elektronik', 
    price: 500000, 
    img: 'https://i.pinimg.com/736x/12/c3/e5/12c3e57962f9776e9c3d27c081168739.jpg',
    colors: ['Hitam', 'Putih', 'Biru'],
    features: ['Bluetooth 5.0', 'Battery 20 jam', 'Noise Cancelling'],
    description: 'Headphone wireless dengan noise cancellation aktif.'
  },
  { 
    id: 'e2', 
    name: 'Samsung Galaxy A26 5G', 
    category: 'elektronik', 
    price: 3500000, 
    img: 'https://i.pinimg.com/1200x/bd/5c/b6/bd5cb69c3ceeb07a62a5668c5baaea57.jpg',
    colors: ['Hitam', 'Biru', 'Silver'],
    storage: ['128GB', '256GB'],
    description: 'Smartphone 5G dengan kamera 50MP dan baterai 5000mAh.'
  },
  { 
    id: 'e3', 
    name: 'Powerbank 10000mAh', 
    category: 'elektronik', 
    price: 120000, 
    img: 'https://i.pinimg.com/736x/31/e0/b3/31e0b39895c57196bf2dd1027ecec552.jpg',
    colors: ['Hitam', 'Putih', 'Merah'],
    features: ['Dual USB', 'Fast Charging', 'LED Indicator'],
    description: 'Powerbank compact dengan kapasitas 10000mAh.'
  },
  { 
    id: 'e4', 
    name: 'Huawei Band 10', 
    category: 'elektronik', 
    price: 500000, 
    img: 'https://i.pinimg.com/1200x/12/2d/9d/122d9dc2e5827f5ae8ecffa5419328af.jpg',
    colors: ['Hitam', 'Merah', 'Biru'],
    sizes: ['Small', 'Medium', 'Large'],
    description: 'Smart band dengan monitor detak jantung dan SpO2.'
  },
  { 
    id: 'e5', 
    name: 'Laptop lenovo legion pro 7i gen 9', 
    category: 'elektronik', 
    price: 56300000, 
    img: 'https://i.pinimg.com/1200x/17/96/5e/17965e8e20317941c7c52ea577973dc6.jpg',
    colors: ['Hitam', 'Gray'],
    specs: ['RTX 4090', '32GB RAM', '2TB SSD'],
    description: 'Laptop gaming flagship dengan prosesor Intel Core i9 generasi terbaru.'
  },
  { 
    id: 'e6', 
    name: 'Headset Mikrofon', 
    category: 'elektronik', 
    price: 210000, 
    img: 'https://i.pinimg.com/736x/e5/b4/8d/e5b48d1d945d1742bccde1ade4f31115.jpg',
    colors: ['Hitam', 'Merah', 'RGB'],
    features: ['7.1 Surround', 'Noise Cancelling Mic', 'Adjustable Headband'],
    description: 'Headset gaming dengan mikrofon yang dapat dilepas.'
  },

  // RUMAH TANGGA (6)
  { 
    id: 'r1', 
    name: 'Sofa Minimalis', 
    category: 'rumah-tangga', 
    price: 3000000, 
    img: 'https://i.pinimg.com/1200x/4e/67/1c/4e671c34d8af0c538f55198d7fc9e496.jpg',
    colors: ['Abu-abu', 'Coklat', 'Navy'],
    dimensions: '200x90x85 cm',
    description: 'Sofa minimalis 2 dudukan dengan bahan kain linen.'
  },
  { 
    id: 'r2', 
    name: 'Meja Kayu', 
    category: 'rumah-tangga', 
    price: 600000, 
    img: 'https://i.pinimg.com/736x/f8/c3/03/f8c303d3ccca31bd9ba86fa61daba101.jpg',
    colors: ['Natural Wood', 'Dark Oak', 'Walnut'],
    dimensions: '120x60x75 cm',
    description: 'Meja kerja kayu solid dengan finishing natural.'
  },
  { 
    id: 'r3', 
    name: 'Kursi Kerja', 
    category: 'rumah-tangga', 
    price: 450000, 
    img: 'https://i.pinimg.com/736x/86/19/16/861916f452079f1fc68e358969a9f8f9.jpg',
    colors: ['Hitam', 'Abu', 'Biru'],
    adjustable: ['Tinggi', 'Sandaran'],
    description: 'Kursi ergonomis dengan lumbar support.'
  },
  { 
    id: 'r4', 
    name: 'Rak Buku', 
    category: 'rumah-tangga', 
    price: 350000, 
    img: 'https://i.pinimg.com/736x/05/01/6e/05016e294dcd757008db5a062a14cd5b.jpg',
    colors: ['Putih', 'Hitam', 'Kayu'],
    dimensions: '80x30x180 cm',
    description: 'Rak buku 5 tingkat dari material MDF tebal.'
  },
  { 
    id: 'r5', 
    name: 'Lampu Meja', 
    category: 'rumah-tangga', 
    price: 85000, 
    img: 'https://i.pinimg.com/736x/52/52/f5/5252f5986ce8d46cd3037f5aa72e7de2.jpg',
    colors: ['Hitam', 'Putih', 'Kuningan'],
    features: ['Dimmable', 'Adjustable Arm', 'LED Bulb'],
    description: 'Lampu meja adjustable dengan pengaturan kecerahan.'
  },
  { 
    id: 'r6', 
    name: 'Karpet Animal', 
    category: 'rumah-tangga', 
    price: 220000, 
    img: 'https://i.pinimg.com/1200x/a5/66/4a/a5664adfe030e74f23734ec27f623867.jpg',
    colors: ['Coklat', 'Abu', 'Krem'],
    size: '160x230 cm',
    description: 'Karpet dengan motif animal print, bahan wol sintetis.'
  },

  // PRIBADI (6)
  { 
    id: 'p1', 
    name: 'Wardah Velvet Matte Lip Mousse', 
    category: 'pribadi', 
    price: 80000, 
    img: 'https://i.pinimg.com/736x/fb/06/65/fb06651ba6f295f08198ea931b9811fe.jpg',
    shades: ['Ruby Red', 'Nude Pink', 'Burgundy', 'Coral'],
    finish: 'Matte Velvet',
    description: 'Lip mousse dengan tekstur velvet dan tahan lama.'
  },
  { 
    id: 'p2', 
    name: 'Parfum Iki Arum EDP', 
    category: 'pribadi', 
    price: 220000, 
    img: 'https://i.pinimg.com/1200x/be/a1/dc/bea1dcb9ff440efce8b838e8e6e1e6fe.jpg',
    fragrances: ['Floral', 'Woody', 'Fresh', 'Oriental'],
    size: '100 ml',
    description: 'Eau de Parfum dengan aroma tahan lama 8-10 jam.'
  },
  { 
    id: 'p3', 
    name: 'Case Handphone', 
    category: 'pribadi', 
    price: 50000, 
    img: 'https://i.pinimg.com/736x/87/19/70/871970f4f58b1147a7c65ee86fc1694c.jpg',
    colors: ['Transparent', 'Matte Black', 'Rose Gold', 'Blue'],
    compatible: ['iPhone 14/15', 'Samsung S23'],
    description: 'Case tempered glass dengan bumper anti shock.'
  },
  { 
    id: 'p4', 
    name: 'Kacamata', 
    category: 'pribadi', 
    price: 180000, 
    img: 'https://i.pinimg.com/736x/e0/41/fe/e041fe82d425896e8173aeaca00d36da.jpg',
    colors: ['Hitam', 'Tortoise', 'Silver'],
    lens: ['UV Protection', 'Blue Light Filter'],
    description: 'Kacamata fashion dengan lensa anti radiasi.'
  },
  { 
    id: 'p5', 
    name: 'Jam Tangan Casual', 
    category: 'pribadi', 
    price: 290000, 
    img: 'https://i.pinimg.com/1200x/68/c9/95/68c995921f354f6a7eef14ea584ba019.jpg',
    colors: ['Silver', 'Rose Gold', 'Black'],
    strap: ['Mesh', 'Leather', 'Silicone'],
    description: 'Jam tangan analog dengan display tanggal.'
  },
  { 
    id: 'p6', 
    name: 'Senter Mini', 
    category: 'pribadi', 
    price: 45000, 
    img: 'https://i.pinimg.com/736x/bc/f4/38/bcf4381c9d859eaa0468160fbfcd35aa.jpg',
    colors: ['Hitam', 'Kuning', 'Silver'],
    features: ['3 Mode', 'Zoomable', 'Water Resistant'],
    description: 'Senter LED mini dengan brightness hingga 200 lumen.'
  },

  // DAPUR (6)
  { 
    id: 'd1', 
    name: 'Set Alat Masak', 
    category: 'dapur', 
    price: 800000, 
    img: 'https://i.pinimg.com/736x/c0/4d/02/c04d02ce4ee546aac3ecf3a346f0d9ae.jpg',
    pieces: 12,
    material: 'Stainless Steel',
    description: 'Set alat masak lengkap 12 pcs dengan gagang kayu.'
  },
  { 
    id: 'd2', 
    name: 'Mitochiba Chopper Twinchop Ch60', 
    category: 'dapur', 
    price: 340000, 
    img: 'https://i.pinimg.com/736x/a1/bd/7f/a1bd7f5da075a5fbbfaa59ec1800c620.jpg',
    colors: ['Merah', 'Hitam', 'Silver'],
    capacity: '1.5L',
    description: 'Food chopper dengan dua bilah pisau dan sistem pengaman.'
  },
  { 
    id: 'd3', 
    name: 'Panci Stainless', 
    category: 'dapur', 
    price: 150000, 
    img: 'https://i.pinimg.com/1200x/d6/45/9b/d6459be31a3b9468319dc4a0a4e98c8e.jpg',
    size: '24 cm',
    capacity: '5L',
    description: 'Panci stainless steel dengan tutup kaca dan pegangan ergonomis.'
  },
  { 
    id: 'd4', 
    name: 'Gelas Boo', 
    category: 'dapur', 
    price: 75000, 
    img: 'https://i.pinimg.com/1200x/8c/c1/87/8cc187700361286d30b3001d905bd20a.jpg',
    colors: ['Transparent', 'Amber', 'Blue'],
    capacity: '350 ml',
    description: 'Gelas minum dengan desain unik dan bahan borosilicate.'
  },
  { 
    id: 'd5', 
    name: 'Talenan Kayu', 
    category: 'dapur', 
    price: 35000, 
    img: 'https://i.pinimg.com/1200x/3b/0c/99/3b0c99033358277edcac040ba73f1b8e.jpg',
    size: '30x20 cm',
    material: 'Bamboo',
    description: 'Talenan bamboo anti bakteri dan tahan lama.'
  },
  { 
    id: 'd6', 
    name: 'Kompor Portable', 
    category: 'dapur', 
    price: 400000, 
    img: 'https://i.pinimg.com/736x/47/88/6f/47886f7a7a946664b104a31b31669caa.jpg',
    colors: ['Hitam', 'Silver'],
    fuel: ['Gas', 'Electric'],
    description: 'Kompor portable untuk camping dan outdoor activities.'
  },
];

// ====== STATE & STORAGE ======
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let balance = parseInt(localStorage.getItem('balance')) || 1000000;
let history = JSON.parse(localStorage.getItem('history')) || [];

// ====== DOM references ======
const productsEl = document.getElementById('products');
const cartCountEl = document.getElementById('cart-count');
const balanceEl = document.getElementById('balance-amount');

// ====== UTIL ======
function formatRupiah(num){
  return parseInt(num).toLocaleString('id-ID');
}

// ====== RENDER PRODUCTS ======
function renderProducts(list){
  productsEl.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="imgwrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="body">
        <h4>${p.name}</h4>
        <div class="price">Rp ${formatRupiah(p.price)}</div>
        <div class="actions">
          <button class="add-btn" onclick="addToCart('${p.id}')">Tambah ke Keranjang</button>
          <button class="info-btn" onclick="openProductDetail('${p.id}')">Detail</button>
        </div>
      </div>
    `;
    productsEl.appendChild(card);
  });
}

// ====== FILTER ======
function filterProducts(category){
  document.querySelectorAll('.category-btn').forEach(b=>b.classList.remove('active'));
  const btn = document.querySelector(`.category-btn[data-category="${category}"]`);
  if(btn) btn.classList.add('active');

  if(category==='all') renderProducts(PRODUCTS);
  else renderProducts(PRODUCTS.filter(p=>p.category===category));
}

// ====== CART =========
function addToCart(productId){
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return alert('Produk tidak ditemukan');
  const existing = cart.find(c => c.id === productId);
  if(existing) existing.quantity++;
  else cart.push({ 
    id: p.id, 
    name: p.name, 
    price: p.price, 
    img: p.img, 
    quantity: 1,
    selectedSize: p.sizes ? p.sizes[0] : null,
    selectedColor: p.colors ? p.colors[0] : null
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  toast(`${p.name} ditambahkan ke keranjang`);
}

// Update cart count
function updateCartCount(){
  const count = cart.reduce((s,i)=>s+i.quantity,0);
  cartCountEl.textContent = count;
}

// Show cart modal
function showCart(){
  const modal = document.getElementById('cart-modal');
  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  itemsEl.innerHTML = '';
  if(cart.length === 0){
    itemsEl.innerHTML = '<p>Keranjang kosong. Tambah produk dulu 😊</p>';
    totalEl.textContent = 'Total: Rp 0';
  } else {
    let total = 0;
    cart.forEach((it, idx)=>{
      if (!it.name || !it.price || !it.quantity) {
        console.error('Item keranjang tidak valid:', it);
        return;
      }
      total += it.price * it.quantity;
      
      // Cari produk asli untuk mendapatkan size dan color
      const originalProduct = PRODUCTS.find(p => p.id === it.id);
      const availableSizes = originalProduct?.sizes || [];
      const availableColors = originalProduct?.colors || [];
      
      const item = document.createElement('div');
      item.className = 'cart-item';
      item.innerHTML = `
        <img src="${it.img}" alt="${it.name}" onerror="this.src='https://via.placeholder.com/60x60?text=No+Image'">
        <div style="flex:1">
          <div style="font-weight:700; font-size:1.1rem;">${it.name}</div>
          <div style="color:var(--muted)">Rp ${formatRupiah(it.price)} x ${it.quantity}</div>
          
          ${availableSizes.length > 0 ? `
          <div style="margin-top:4px; font-size:0.9rem;">
            <strong>Size:</strong> 
            <select onchange="updateCartItemSize(${idx}, this.value)" style="padding:4px; border-radius:4px; margin-left:8px;">
              ${availableSizes.map(size => 
                `<option value="${size}" ${it.selectedSize === size ? 'selected' : ''}>${size}</option>`
              ).join('')}
            </select>
          </div>` : ''}
          
          ${availableColors.length > 0 ? `
          <div style="margin-top:4px; font-size:0.9rem;">
            <strong>Color:</strong> 
            <select onchange="updateCartItemColor(${idx}, this.value)" style="padding:4px; border-radius:4px; margin-left:8px;">
              ${availableColors.map(color => 
                `<option value="${color}" ${it.selectedColor === color ? 'selected' : ''}>${color}</option>`
              ).join('')}
            </select>
          </div>` : ''}
          
          <div class="qty-controls" style="margin-top:8px">
            <button class="small-btn" onclick="changeQuantity(${idx}, -1)">-</button>
            <div style="min-width:26px;text-align:center">${it.quantity}</div>
            <button class="small-btn" onclick="changeQuantity(${idx}, 1)">+</button>
            <button class="small-btn" style="margin-left:8px" onclick="removeItem(${idx})">Hapus</button>
          </div>
        </div>
      `;
      itemsEl.appendChild(item);
    });
    totalEl.textContent = `Total: Rp ${formatRupiah(total)}`;
  }
  modal.style.display = 'flex';
}

// Update size dalam cart
function updateCartItemSize(index, size){
  cart[index].selectedSize = size;
  persistCart();
}

// Update color dalam cart
function updateCartItemColor(index, color){
  cart[index].selectedColor = color;
  persistCart();
}

// close cart
function closeCart(){ document.getElementById('cart-modal').style.display='none'; }

// change qty
function changeQuantity(index, delta){
  cart[index].quantity += delta;
  if(cart[index].quantity <= 0) cart.splice(index,1);
  persistCart();
  showCart();
}

// remove
function removeItem(index){
  cart.splice(index,1);
  persistCart();
  showCart();
}

function persistCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// ===== DETAIL PRODUCT MODAL =====
function openProductDetail(productId){
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return;
  
  // Buat modal detail
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'detail-modal';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-panel" style="max-width: 500px;">
      <header class="modal-header">
        <h3>Detail Produk</h3>
        <button class="close" onclick="closeDetailModal()">×</button>
      </header>
      <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="${p.img}" alt="${p.name}" style="width: 100%; max-height: 300px; object-fit: contain; border-radius: 8px;">
        </div>
        
        <h2 style="margin: 0 0 10px 0;">${p.name}</h2>
        <div style="font-size: 1.5rem; font-weight: 700; color: var(--blue-1); margin-bottom: 15px;">
          Rp ${formatRupiah(p.price)}
        </div>
        
        <div style="margin-bottom: 15px; color: var(--muted);">
          <strong>Kategori:</strong> ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}
        </div>
        
        ${p.description ? `
        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
          <strong>Deskripsi:</strong><br>
          ${p.description}
        </div>` : ''}
        
        ${p.sizes ? `
        <div style="margin-bottom: 15px;">
          <strong>Ukuran Tersedia:</strong>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            ${p.sizes.map(size => `<span style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 6px; background: white;">${size}</span>`).join('')}
          </div>
        </div>` : ''}
        
        ${p.colors ? `
        <div style="margin-bottom: 15px;">
          <strong>Warna Tersedia:</strong>
          <div style="display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap;">
            ${p.colors.map(color => `<span style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 6px; background: white;">${color}</span>`).join('')}
          </div>
        </div>` : ''}
        
        ${p.features ? `
        <div style="margin-bottom: 15px;">
          <strong>Fitur:</strong>
          <ul style="margin: 8px 0 0 20px; padding: 0;">
            ${p.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>` : ''}
        
        ${p.dimensions ? `
        <div style="margin-bottom: 15px;">
          <strong>Dimensi:</strong> ${p.dimensions}
        </div>` : ''}
        
        ${p.shades ? `
        <div style="margin-bottom: 15px;">
          <strong>Shades:</strong>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            ${p.shades.map(shade => `<span style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 6px; background: white;">${shade}</span>`).join('')}
          </div>
        </div>` : ''}
        
        ${p.storage ? `
        <div style="margin-bottom: 15px;">
          <strong>Storage:</strong>
          <div style="display: flex; gap: 8px; margin-top: 8px;">
            ${p.storage.map(storage => `<span style="padding: 6px 12px; border: 1px solid #ddd; border-radius: 6px; background: white;">${storage}</span>`).join('')}
          </div>
        </div>` : ''}
      </div>
      <div class="modal-footer">
        <button class="btn primary" style="width: 100%; padding: 12px;" onclick="addToCart('${p.id}'); closeDetailModal();">
          Tambah ke Keranjang
        </button>
        <button class="btn ghost" style="width: 100%;" onclick="closeDetailModal()">
          Tutup
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeDetailModal();
    }
  });
}

function closeDetailModal(){
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.remove();
  }
}

// ===== CHECKOUT & PAYMENT =====
function checkout(){
  if(cart.length===0) return alert('Keranjang kosong!');
  
  // Ambil nilai input
  const name = document.getElementById('customer-name').value.trim();
  const address = document.getElementById('customer-address').value.trim();
  
  // Validasi input
  if(!name || !address){
    return alert('Harap isi nama dan alamat lengkap sebelum checkout.');
  }
  
  const total = cart.reduce((s,i)=>s+i.price*i.quantity,0);
  const method = document.getElementById('payment-method').value;
  if(method !== 'COD' && total > balance){
    return alert(`Saldo tidak cukup untuk metode ${method}. Total: Rp ${formatRupiah(total)}, Saldo: Rp ${formatRupiah(balance)}`);
  }

  // Simulasi pembayaran: QRIS & DANA langsung kurangi saldo; COD tidak dikurangi sekarang
  if(method !== 'COD') {
    balance -= total;
    localStorage.setItem('balance', balance);
    updateBalanceDisplay();
  }

  const date = new Date().toLocaleString();
  // Tambahkan nama dan alamat ke history dengan detail size & color
  history.unshift({ 
    date, 
    total, 
    method, 
    name, 
    address, 
    items: JSON.parse(JSON.stringify(cart.map(item => ({
      ...item,
      size: item.selectedSize,
      color: item.selectedColor
    })))) 
  });
  localStorage.setItem('history', JSON.stringify(history));

  // Kosongkan keranjang dan input
  cart = [];
  persistCart();
  document.getElementById('customer-name').value = '';
  document.getElementById('customer-address').value = '';
  closeCart();
  toast(`Checkout berhasil via ${method} atas nama ${name}. Total Rp ${formatRupiah(total)}`);
}

// ===== HISTORY =====
function showHistory(){
  const modal = document.getElementById('history-modal');
  const list = document.getElementById('history-list');
  list.innerHTML = '';
  if(history.length===0){
    list.innerHTML = '<p>Belum ada riwayat belanja.</p>';
  } else {
    history.forEach(h=>{
      const el = document.createElement('div');
      el.className = 'history-item';
      el.innerHTML = `
        <div style="display:flex;justify-content:space-between">
          <div><strong>${h.date}</strong></div>
          <div><em>${h.method}</em></div>
        </div>
        <div><strong>Nama:</strong> ${h.name}</div>
        <div><strong>Alamat:</strong> ${h.address}</div>
        <div>Total: Rp ${formatRupiah(h.total)}</div>
        <ul style="margin:8px 0;padding-left:18px">
          ${h.items.map(i=>`
            <li>
              ${i.name} x${i.quantity}
              ${i.size ? ` (Size: ${i.size})` : ''}
              ${i.color ? ` (Color: ${i.color})` : ''}
            </li>
          `).join('')}
        </ul>
      `;
      list.appendChild(el);
    });
  }
  modal.style.display = 'flex';
}

function closeHistory(){ document.getElementById('history-modal').style.display='none'; }

function clearHistory(){
  if(!confirm('Hapus semua riwayat?')) return;
  history = [];
  localStorage.removeItem('history');
  showHistory();
}

// ===== TOAST (simple) =====
let toastTimer;
function toast(msg){
  let t = document.getElementById('simple-toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'simple-toast';
    t.style.position = 'fixed';
    t.style.right = '20px';
    t.style.bottom = '20px';
    t.style.background = 'rgba(0,0,0,0.8)';
    t.style.color = 'white';
    t.style.padding = '10px 14px';
    t.style.borderRadius = '8px';
    t.style.zIndex = 60;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ t.style.opacity='0'; }, 2500);
}

// ===== INIT =====
function updateBalanceDisplay(){ balanceEl.textContent = formatRupiah(balance); }
function init(){
  // render all products initially
  renderProducts(PRODUCTS);
  updateBalanceDisplay();
  updateCartCount();

  // category handlers
  document.querySelectorAll('.category-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>filterProducts(btn.dataset.category));
  });

  // cart & history buttons
  document.getElementById('cart-btn').addEventListener('click', showCart);
  document.getElementById('history-btn').addEventListener('click', showHistory);

  // set footer year
  document.getElementById('year').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);

// close modals on outside click
window.addEventListener('click', (e)=>{
  const cartModal = document.getElementById('cart-modal');
  const histModal = document.getElementById('history-modal');
  if(e.target === cartModal) closeCart();
  if(e.target === histModal) closeHistory();
});
