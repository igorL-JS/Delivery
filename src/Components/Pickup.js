import React from "react";
import "./../styles.css";

export const Pickup = () => {
    return (
    <form className="form form__pick-up">
        <div className="form__line">
            <label className="form__block radiobox">
                <input type="radio" className="form__radiobox" name="point" required/>
                <span className="form__radio-text">Пункт выдачи заказов Песчаная ул., д. 13</span>
            </label>
            <label className="form__block radiobox">
                <input type="radio" className="form__radiobox" name="point" required/>
                <span
                    className="form__radio-text">Пункт выдачи заказов       Подсосенский пер. д. 11</span>
            </label>
        </div>
        <div className="form__line">
            <label className="form__block map">
                {/*<iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7327.889047116551!2d37.505118571066426!3d55.80309810002168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549b498c46ef3%3A0x217414041d419248!2z0J_QtdGB0YfQsNC90LDRjyDRg9C7LiwgMTMsINCc0L7RgdC60LLQsCwgMTI1MjUy!5e0!3m2!1sru!2sru!4v1595059703655!5m2!1sru!2sru"
                                  width="100%" height="450" frameBorder="0" style="border:0;" allowFullScreen=""
                                  aria-hidden="false" tabIndex="0"></iframe>*/}
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