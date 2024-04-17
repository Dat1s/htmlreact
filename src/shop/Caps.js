import React, { useState } from 'react';
import '../index.css';
import cap1 from "../img/guccic1.PNG"
import cap2 from "../img/guccic2.PNG"
import cap3 from "../img/guccic3.PNG"
import cap4 from "../img/guccic4.PNG"
import cap5 from "../img/lvc1.PNG"
import cap6 from "../img/lvc2.PNG"
import cap7 from "../img/lvc3.PNG"
import cap8 from "../img/lvc4.PNG"
import cap9 from "../img/versacec1.PNG"
import cap10 from "../img/versacec2.PNG"
import cap11 from "../img/versacec3.PNG"
import cap12 from "../img/versacec4.PNG"

function Caps() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        imageSrc: '',
        title: '',
        description: '',
        price: ''
    });

    const openModal = (imageSrc, title, description, price) => {
        console.log("Opening modal with:", imageSrc, title, description, price);
        setModalContent({
            imageSrc,
            title,
            description,
            price
        });
        setModalOpen(true);
    };

    const closeModal = () => {
        console.log("Closing modal");
        setModalOpen(false);
    };

    return (
        <div className="product-grid">
            {modalOpen && (
                <div id="productModal" className="modal-overlay" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-content">
                        <img id="modal-image" src={modalContent.imageSrc} alt="Product Image" />
                        <div id="modal-description">
                            <h2>{modalContent.title}</h2>
                            <p>{modalContent.description}</p>
                            <p>{modalContent.price}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap1}
                        alt="cap 1" 
                        onClick={() => openModal(
                            cap1, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>



            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap2}
                        alt="cap 2" 
                        onClick={() => openModal(
                            cap2, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap3}
                        alt="cap 3" 
                        onClick={() => openModal(
                            cap3, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap4}
                        alt="cap 4" 
                        onClick={() => openModal(
                            cap4, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap5}
                        alt="cap 5" 
                        onClick={() => openModal(
                            cap5, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap6}
                        alt="cap 6" 
                        onClick={() => openModal(
                            cap6, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap7}
                        alt="cap 7" 
                        onClick={() => openModal(
                            cap7, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap8}
                        alt="cap 8" 
                        onClick={() => openModal(
                            cap8, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

                        <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap9}
                        alt="cap 9" 
                        onClick={() => openModal(
                            cap9, 
                            'GG Marmont reversible belt', 
                            'Description of GG Marmont reversible belt.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont reversible belt</h2>
                        <p>Description of GG Marmont reversible belt.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap10}
                        alt="cap 10" 
                        onClick={() => openModal(
                            cap10, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap11}
                        alt="cap 11" 
                        onClick={() => openModal(
                            cap11, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div>

            <div className="product-card">
                <div className="product-details">
                    <img 
                        src={cap12}
                        alt="cap 12" 
                        onClick={() => openModal(
                            cap12, 
                            'GG Marmont leather belt with shiny buckle', 
                            'Description of GG Marmont leather belt with shiny buckle.', 
                            '$470.00'
                        )} 
                    />
                    <div className="description">
                        <h2>GG Marmont leather belt with shiny buckle</h2>
                        <p>Description of GG Marmont leather belt with shiny buckle.</p>
                        <p>$470.00</p>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div> 
            {/* ... Continue with other product cards similarly */}
            
        </div>
    );
}

export default Caps;
