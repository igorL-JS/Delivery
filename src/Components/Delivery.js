import React from "react";
import "./../styles.css";

export const Delivery = () => {
    return (
        <form className="form form__delivery">
            <div className="form__line">
                <label className="form__block"><span className="form__field-title">ФИО</span>
                    <input type="text" className="form__input" name="fullname" id="fullname-field"
                           placeholder="Только кириллица" pattern="[А-Яа-яЁё\s-]" required/>
                </label>
                <label className="form__block"><span className="form__field-title">Телефон</span>
                    <input type="text" className="form__input" name="phone" id="phone-field"
                           placeholder="+7 (___) ___-__-__ " pattern="" required/>
                </label>
            </div>
            <div className="form__line">
                <label className="form__block">
                    <span className="form__field-title">Адрес доставки</span>
                    <input type="text" className="form__input" name="address" id="address-field"
                           placeholder="Город, улица, дом" required/>
                </label>
            </div>
            <div className="form__line">
                <label className="form__block">
                    <span className="form__field-title">Комментарий</span>
                    <textarea className="form__textarea"
                              name="comment" id="comment-field" rows="6"
                              required>
                    </textarea>
                </label>
            </div>
            <div className="form__line">
                <label className="form__submit">
                    <input type="submit" className="form__btn" value="Оформить заказ"/>
                </label>
            </div>
        </form>
    )

};


