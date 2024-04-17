import React, { useState, Suspense } from 'react';
import './index.css';
import Belts from './shop/Belts.js';
import Caps from './shop/Caps.js';
import Dunks from './shop/Dunks.js';
import Jackets from './shop/Jackets.js';

// Import the shopping cart image
import shoppingCartImage from './img/shopping-cartt.png';



function ProductCatalog() {
    const [display, setDisplay] = useState('homepage');
    const [CategoryComponent, setCategoryComponent] = useState(null);

    const goHome = () => {
        setDisplay('homepage');
        setCategoryComponent(null);
    };

    const handleButtonClick = (CategoryComponent) => {
        setDisplay(CategoryComponent.name.toLowerCase());
        setCategoryComponent(() => CategoryComponent);
    };

    return (
        <div>
            <header>
                <h1 onClick={goHome}>Product Catalog</h1>
                <nav>
                    <button className="button" onClick={() => handleButtonClick('Cart')}>
                        <img src={shoppingCartImage} alt="Shopping Cart" style={{height: '20px', marginRight: '5px'}} />
                    </button>
                    <button className="button" onClick={() => handleButtonClick(Belts)}>
                        Belts
                    </button>
                    <button className="button" onClick={() => handleButtonClick(Caps)}>
                        Caps
                    </button>
                    <button className="button" onClick={() => handleButtonClick(Dunks)}>
                        Dunks
                    </button>
                    <button className="button" onClick={() => handleButtonClick(Jackets)}>
                        Jackets
                    </button>
                    
                    {/* Add other buttons for Caps, Dunks, Jackets similarly */}
                </nav>
            </header>
    
            {display === 'homepage' && <div className="homepage">
                <h1>Welcome to Our Product Catalog!</h1>
            </div>}
    
            {display !== 'homepage' && CategoryComponent && (
                <main className="main">
                    <div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <CategoryComponent />
                        </Suspense>
                    </div>
                </main>
            )}
    
            <footer>
                <p>&copy; 2024 Product Catalog</p>
            </footer>
    
            {/* Modal component can be added here */}
        </div>
    )
}

export default ProductCatalog;
