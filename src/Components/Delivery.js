import React from "react";
import "./../styles.css";
import err from "./../Components/Vector.svg"
import MaskedInput from "react-text-mask";

export const Delivery = ({values, onChange, onBlur, errors, touched, handleSubmit, isSubmitting}) => {
    return (
        <form className="form form__delivery"  onSubmit={handleSubmit} autoComplete={"off"}>
            <div className="form__line">
                <label className="form__block"><span className="form__field-title">ФИО</span>
                    <input type="text"
                           className="form__input"
                           name="fullname"
                           id="fullname-field"
                           placeholder="Только кириллица"
                           onBlur={onBlur}
                           onChange={onChange}
                           value={values.fullname}
                           disabled={isSubmitting}/>
                    {touched.fullname && errors.fullname
                        ?   <div>
                                <div className="error">{errors.fullname}</div>
                                <img src={err} className="alert" alt="alert"/>
                            </div>
                        : null}
                </label>
                <label className="form__block"><span className="form__field-title">Телефон</span>

                    <MaskedInput
                        mask={[/[1-9]/,/\d/,/\d/,' ',/\d/,/\d/,/\d/,' ',/\d/,/\d/,' ',/\d/,/\d/]}
                        className="form__input"
                        name="phone"
                        guide={true}
                        id="phone-field"
                        placeholder="+7 (___) ___-__-__ "
                        onBlur={onBlur}
                        onChange={onChange}
                        value={values.phone}
                        disabled={isSubmitting}
                    />
                    {touched.phone && errors.phone
                        ? <div>
                            <div className="error">{errors.phone}</div>
                            <img src={err} className="alert" alt="alert"/>
                        </div>
                        : null}
                </label>
            </div>
            <div className="form__line">
                <label className="form__block">
                    <span className="form__field-title">Адрес доставки</span>
                    <input type="text"
                           className="form__input"
                           name="address"
                           id="address-field"
                           placeholder="Город, улица, дом"
                           onBlur={onBlur}
                           onChange={onChange}
                           value={values.address}
                           disabled={isSubmitting}/>
                    {touched.address && errors.address
                        ? <div>
                            <div className="error">{errors.address}</div>
                            <img src={err} className="alert" alt="alert"/>
                          </div>
                        : null
                    }
                </label>
            </div>
            <div className="form__line">
                <label className="form__block">
                    <span className="form__field-title">Комментарий</span>
                    <textarea className="form__textarea"
                              name="comment"
                              id="comment-field"
                              rows="6"
                              onBlur={onBlur}
                              onChange={onChange}
                              value={values.comment}
                              disabled={isSubmitting}>
                    </textarea>
                    {touched.comment && errors.comment
                        ? <div>
                            <div className="error">{errors.comment}</div>
                            <img src={err} className="alert" alt="alert"/>
                          </div>
                        : null
                    }
                </label>
            </div>
            <div className="form__line">
                <label className="form__submit">
                    <input type="submit"
                           className="form__btn"
                           value="Оформить заказ" disabled={isSubmitting}/>
                </label>
            </div>
        </form>
    )
};



