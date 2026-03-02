import React, { useState } from "react";
import "./ProductCard.css";

// البيانات الأساسية للمنتج (السعر واسم الصورة)
// يمكنك تمرير هذه البيانات كـ props من المكون الأب
const PRODUCT_DATA = {
    nom: "Gilet Jaune",
    prix: 50,
    image: "/images/gilet.jpeg" // تأكد من وجود الصورة في مجلد public/images/
};

const ProductCard = () => {
    // تحديد الألوان المطلوبة: أزرق، أحمر، أخضر
    const availableColors = [
        { id: 1, name: "Bleu", hex: "#0000FF" },
        { id: 2, name: "Rouge", hex: "#FF0000" },
        { id: 3, name: "Vert", hex: "#008000" }
    ];

    // حالات المكون (States)
    const [selectedColor, setSelectedColor] = useState(availableColors[0].name);
    const [quantity, setQuantity] = useState(1);
    const [userData, setUserData] = useState({ name: "", phone: "" });

    // تحديث بيانات المستخدم
    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    // دالة إرسال الطلب عبر الواتساب
    const sendToWhatsApp = (e) => {
        e.preventDefault(); // منع تحديث الصفحة

        // التحقق من ملء البيانات
        if (!userData.name || !userData.phone) {
            return alert("Veuillez remplir votre nom et votre numéro de téléphone.");
        }

        const myNumber = "212780976000"; // رقم الواتساب الخاص بك
        const totalPrice = PRODUCT_DATA.prix * quantity;

        // بناء رسالة واضحة ومنظمة بجميع المعلومات
        const message = `*Nouvelle Commande*%0A` +
            `------------------%0A` +
            `*Client:* ${userData.name}%0A` +
            `*Téléphone:* ${userData.phone}%0A` +
            `------------------%0A` +
            `*Article:* ${PRODUCT_DATA.nom}%0A` +
            `*Couleur:* ${selectedColor}%0A` +
            `*Quantité:* ${quantity}%0A` +
            `*Prix Unitaire:* ${PRODUCT_DATA.prix} MAD%0A` +
            `------------------%0A` +
            `*Total à Payer:* ${totalPrice} MAD`;

        const url = `https://wa.me/${myNumber}?text=${message}`;

        // فتح الرابط مع التعامل مع حظر النوافذ المنبثقة
        const win = window.open(url, "_blank");
        if (!win) {
            window.location.href = url; // فتح في نفس النافذة كخيار بديل
        }
    };

    return (
        <div className="product-card">
            {/* عرض صورة المنتج */}
            <img src={PRODUCT_DATA.image} alt={PRODUCT_DATA.nom} className="product-img" />

            <div className="product-details">
                <h3 className="product-title">{PRODUCT_DATA.nom}</h3>
                <p className="product-price">{PRODUCT_DATA.prix} MAD</p>
                <p className="product-desc">Gilet haute visibilité avec bandes réfléchissantes.</p>

                {/* قسم اختيار الألوان */}
                <div className="section">
                    <label className="section-title">Couleur:</label>
                    <div className="colors-list">
                        {availableColors.map((color) => (
                            <button
                                key={color.id}
                                title={color.name}
                                className={`color-option ${selectedColor === color.name ? "active" : ""}`}
                                style={{ backgroundColor: color.hex }}
                                onClick={() => setSelectedColor(color.name)}
                            />
                        ))}
                    </div>
                </div>

                {/* قسم اختيار الكمية */}
                <div className="section">
                    <label className="section-title">Quantité:</label>
                    <div className="quantity-picker">
                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                        <span className="quantity-value">{quantity}</span>
                        <button onClick={() => setQuantity(q => q + 1)}>+</button>
                    </div>
                </div>

                {/* نموذج طلب صغير ومدمج */}
                <form className="order-form-compact" onSubmit={sendToWhatsApp}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre Nom Complet"
                        required
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="N° WhatsApp (ex: 06...) "
                        required
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="submit-order-btn">
                        Confirmer la Commande
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductCard;