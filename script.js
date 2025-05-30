document.addEventListener('DOMContentLoaded', function() {
    // Товары для каталога
    const products = [
        {
            id: 1,
            title: 'Игровая клавиатура Razer BlackWidow',
            category: 'keyboard',
            price: 8990,
            image: 'img/321.png',
            description: 'Механическая игровая клавиатура с переключателями Razer Green и RGB подсветкой.',
            badge: 'Хит'
        },
        {
            id: 2,
            title: 'Беспроводная мышь Logitech MX Master 3',
            category: 'mouse',
            price: 8990,
            image: 'img/233.png',
            description: 'Эргономичная беспроводная мышь с технологией Darkfield для работы на любой поверхности.',
            badge: 'Топ'
        },
        {
            id: 3,
            title: 'Наушники Sony WH-1000XM4',
            category: 'headphones',
            price: 24990,
            image: 'img/sony.webp',
            description: 'Беспроводные наушники с шумоподавлением и 30-часовым временем работы.',
            badge: 'Хит'
        },
        {
            id: 4,
            title: 'Монитор Dell S2721QS 27" 4K',
            category: 'monitor',
            price: 32990,
            image: 'img/dell.webp',
            description: '27-дюймовый 4K монитор с IPS матрицей и поддержкой HDR.',
            badge: null
        },
        {
            id: 5,
            title: 'Коврик для мыши SteelSeries QcK XXL',
            category: 'other',
            price: 2490,
            image: 'img/steel.jpeg',
            description: 'Большой игровой коврик с оптимальным сочетанием скорости и контроля.',
            badge: null
        },
        {
            id: 6,
            title: 'Клавиатура Logitech K380',
            category: 'keyboard',
            price: 3490,
            image: 'img/klava.jpg',
            description: 'Компактная беспроводная клавиатура с мультиустройственным подключением.',
            badge: null
        },
        {
            id: 7,
            title: 'Игровая мышь Razer DeathAdder V2',
            category: 'mouse',
            price: 5990,
            image: 'img/death.png',
            description: 'Эргономичная игровая мышь с оптическим сенсором 20K DPI.',
            badge: null
        },
        {
            id: 8,
            title: 'Наушники Apple AirPods Pro',
            category: 'headphones',
            price: 19990,
            image: 'img/apple.jpg',
            description: 'Беспроводные наушники с активным шумоподавлением и прозрачным режимом.',
            badge: null
        },
        {
            id: 9,
            title: 'Монитор LG 27GL850-B 27"',
            category: 'monitor',
            price: 42990,
            image: 'img/lg.jpg',
            description: 'Игровой монитор с Nano IPS матрицей, 144Hz и 1ms откликом.',
            badge: 'Топ'
        },
        {
            id: 10,
            title: 'Веб-камера Logitech C920',
            category: 'other',
            price: 6990,
            image: 'img/cam.webp',
            description: 'Веб-камера с Full HD разрешением и стерео микрофонами.',
            badge: null
        },
        {
            id: 11,
            title: 'Механическая клавиатура Keychron K2',
            category: 'keyboard',
            price: 7990,
            image: 'img/klava2.jpg',
            description: 'Компактная механическая клавиатура с Bluetooth и проводным подключением.',
            badge: null
        },
        {
            id: 12,
            title: 'Вертикальная мышь Logitech MX Vertical',
            category: 'mouse',
            price: 7990,
            image: 'img/lol.jpg',
            description: 'Эргономичная вертикальная мышь для комфортной работы.',
            badge: null
        },
        {
            id: 13,
            title: 'Наушники Bose QuietComfort 35 II',
            category: 'headphones',
            price: 22990,
            image: 'img/hz.webp',
            description: 'Беспроводные наушники с шумоподавлением и голосовым ассистентом.',
            badge: null
        },
        {
            id: 14,
            title: 'Монитор Samsung Odyssey G7 32"',
            category: 'monitor',
            price: 59990,
            image: 'img/opa.webp',
            description: 'Игровой монитор с изогнутым экраном 240Hz и QHD разрешением.',
            badge: null
        },
        {
            id: 15,
            title: 'USB-концентратор Anker 7-in-1',
            category: 'other',
            price: 3490,
            image: 'img/bla.jpg',
            description: 'USB-C концентратор с HDMI, USB-A, SD кардридером и другими портами.',
            badge: null
        },
        {
            id: 16,
            title: 'Клавиатура Apple Magic Keyboard',
            category: 'keyboard',
            price: 9990,
            image: 'img/pop.png',
            description: 'Беспроводная клавиатура с низкопрофильными клавишами и сенсором ID.',
            badge: null
        },
        {
            id: 17,
            title: 'Игровая мышь SteelSeries Rival 600',
            category: 'mouse',
            price: 6990,
            image: 'img/rival.webp',
            description: 'Игровая мышь с двойным сенсором и настраиваемым весом.',
            badge: null
        },
        {
            id: 18,
            title: 'Наушники Sennheiser Momentum 3',
            category: 'headphones',
            price: 27990,
            image: 'img/moment.webp',
            description: 'Беспроводные наушники премиум-класса с активным шумоподавлением.',
            badge: null
        },
        {
            id: 19,
            title: 'Монитор ASUS ProArt PA32UCX 32"',
            category: 'monitor',
            price: 249990,
            image: 'img/asus.png',
            description: 'Профессиональный 4K HDR монитор с Mini-LED подсветкой.',
            badge: null
        },
        {
            id: 20,
            title: 'Подставка для ноутбука Rain Design mStand',
            category: 'other',
            price: 5990,
            image: 'img/yt.jpg',
            description: 'Эргономичная алюминиевая подставка для ноутбуков.',
            badge: null
        },
        {
            id: 21,
            title: 'Клавиатура Corsair K95 RGB Platinum',
            category: 'keyboard',
            price: 14990,
            image: 'img/cor.png',
            description: 'Механическая игровая клавиатура с алюминиевой рамкой и RGB подсветкой.',
            badge: null
        },
        {
            id: 22,
            title: 'Мышь Logitech G Pro X Superlight',
            category: 'mouse',
            price: 10990,
            image: 'img/log.webp',
            description: 'Ультралегкая беспроводная игровая мышь весом всего 63 грамма.',
            badge: 'Новинка'
        },
        {
            id: 23,
            title: 'Наушники Jabra Elite 85h',
            category: 'headphones',
            price: 14990,
            image: 'img/jab.jpg',
            description: 'Беспроводные наушники с активным шумоподавлением и влагозащитой.',
            badge: null
        },
        {
            id: 24,
            title: 'Монитор Acer Predator X35 35"',
            category: 'monitor',
            price: 149990,
            image: 'img/pr.jpg',
            description: 'Игровой монитор с изогнутым экраном, 200Hz и G-Sync Ultimate.',
            badge: null
        },
        {
            id: 25,
            title: 'Док-станция CalDigit TS3 Plus',
            category: 'other',
            price: 24990,
            image: 'img/123.jpg',
            description: 'Профессиональная док-станция с 15 портами для Mac и PC.',
            badge: null
        },
        {
            id: 26,
            title: 'Клавиатура Das Keyboard 4 Professional',
            category: 'keyboard',
            price: 12990,
            image: 'img/2.jpg',
            description: 'Механическая клавиатура с переключателями Cherry MX и алюминиевым корпусом.',
            badge: null
        },
        {
            id: 27,
            title: 'Мышь Microsoft Sculpt Ergonomic',
            category: 'mouse',
            price: 3990,
            image: 'img/rt.png',
            description: 'Эргономичная беспроводная мышь для комфортной работы.',
            badge: null
        },
        {
            id: 28,
            title: 'Наушники Audio-Technica ATH-M50x',
            category: 'headphones',
            price: 12990,
            image: 'img/aud.jpg',
            description: 'Профессиональные студийные наушники с отличным звуком.',
            badge: null
        },
        {
            id: 29,
            title: 'Монитор BenQ PD3220U 32"',
            category: 'monitor',
            price: 89990,
            image: 'img/ben.webp',
            description: '4K монитор для дизайнеров с Thunderbolt 3 и точной цветопередачей.',
            badge: null
        },
        {
            id: 30,
            title: 'Игровой коврик Razer Goliathus Extended',
            category: 'other',
            price: 2990,
            image: 'img/rz.png',
            description: 'Большой игровой коврик с микро-текстурированной поверхностью.',
            badge: null
        }
    ];

    // Элементы DOM
    const productsGrid = document.getElementById('products-grid');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartToggle = document.getElementById('cart-toggle');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const checkoutBtn = document.getElementById('checkout-btn');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.nav');
    const notification = document.getElementById('notification');
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Корзина
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Отображение товаров
    function displayProducts(productsToDisplay) {
        productsGrid.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-content">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${product.price.toLocaleString()} ₽</div>
                    <div class="product-actions">
                        <button class="btn btn-sm btn-outline view-details" data-id="${product.id}">Подробнее</button>
                        <button class="btn btn-sm btn-primary add-to-cart" data-id="${product.id}">В корзину</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', showProductDetails);
        });
    }

   
    function getCategoryName(category) {
        const categories = {
            'keyboard': 'Клавиатуры',
            'mouse': 'Мыши',
            'headphones': 'Наушники',
            'monitor': 'Мониторы',
            'other': 'Аксессуары'
        };
        return categories[category] || category;
    }

    // Фильтрация товаров
    function filterProducts() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        
        let filteredProducts = products;
        
        // Фильтрация по категории
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }
        
        // Фильтрация по цене
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (priceRange === '20000') {
                filteredProducts = filteredProducts.filter(product => product.price >= 20000);
            } else {
                filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
            }
        }
        
        displayProducts(filteredProducts);
    }

    // Добавление товара в корзину
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showNotification(`${product.title} добавлен в корзину`, 'success');
    }

    // Обновление корзины
    function updateCart() {
        // Сохраняем корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Обновляем счетчик товаров
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Обновляем список товаров в корзине
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <div class="cart-item-price">${item.price.toLocaleString()} ₽</div>
                        <div class="cart-item-actions">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
        }
        
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toLocaleString();
        
        
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    
    function decreaseQuantity(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === productId);
        
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        
        updateCart();
    }

    // Увеличение количества товара
    function increaseQuantity(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === productId);
        item.quantity += 1;
        updateCart();
    }

    // Удаление товара из корзины
    function removeItem(e) {
        const productId = parseInt(e.target.closest('button').getAttribute('data-id'));
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        showNotification('Товар удален из корзины', 'error');
    }

    // Показ уведомления
    function showNotification(message, type = 'success') {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Показ деталей товара
    function showProductDetails(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        
        modalBody.innerHTML = `
            <div class="modal-product">
                <div class="modal-product-image-container">
                    <img src="${product.image}" alt="${product.title}" class="modal-product-image">
                </div>
                <div class="modal-product-info">
                    <h2 class="modal-product-title">${product.title}</h2>
                    <div class="modal-product-price">${product.price.toLocaleString()} ₽</div>
                    <span class="modal-product-category">${getCategoryName(product.category)}</span>
                    <p class="modal-product-description">${product.description}</p>
                    <div class="modal-product-actions">
                        <button class="btn btn-primary add-to-cart-modal" data-id="${product.id}">Добавить в корзину</button>
                        <button class="btn btn-outline close-modal-btn">Закрыть</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
       
        document.querySelector('.add-to-cart-modal').addEventListener('click', addToCart);
        document.querySelector('.close-modal-btn').addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Оформление заказа
    function checkout() {
        if (cart.length === 0) {
            showNotification('Корзина пуста', 'error');
            return;
        }
        
        showNotification('Заказ оформлен! Спасибо за покупку!', 'success');
        cart = [];
        updateCart();
        cartSidebar.classList.remove('open');
    }

    // Инициализация
    function init() {
        displayProducts(products);
        updateCart();
        
        // Обработчики событий
        cartToggle.addEventListener('click', () => {
            cartSidebar.classList.toggle('open');
        });
        
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });
        
        checkoutBtn.addEventListener('click', checkout);
        
        categoryFilter.addEventListener('change', filterProducts);
        priceFilter.addEventListener('change', filterProducts);
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Закрытие модального окна при клике вне его
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Плавная прокрутка для якорных ссылок
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Закрываем меню на мобильных устройствах
                    if (window.innerWidth <= 768) {
                        menuToggle.classList.remove('active');
                        nav.classList.remove('active');
                    }
                }
            });
        });
    }

    
    init();
});