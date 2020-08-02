import React from "react";
import "./../styles.css";
import {Map, Placemark, ZoomControl} from "react-yandex-maps";
import local from "./local.png";
import {useFormik} from "formik";

export const Pickup = () => {

    const validate = values => {
        debugger
        let errors = {};
        (values.point !== "on") && (errors.point = "Выберите пункт самовывоза");
        return errors
    };
    const pickupForm = useFormik({
        initialValues: {},
        validate
    });

    return (
    <form className="form form__pick-up" onSubmit={pickupForm.handleSubmit} >
        <div className="form__line">
            <label className="form__block radiobox">
                <input
                    type="radio"
                    className="form__radiobox"
                    name="point"
                    onChange={pickupForm.handleChange}
                    disabled={pickupForm.isSubmitting}
                />
                <span className="form__radio-text">Пункт выдачи заказов Песчаная ул., д. 13</span>
                {pickupForm.errors.point
                    ? <div className="error">{pickupForm.errors.point}</div>
                    : null}
            </label>
            <label className="form__block radiobox">
                <input
                    type="radio"
                    className="form__radiobox"
                    name="point"
                    onChange={pickupForm.handleChange}
                    disabled={pickupForm.isSubmitting}
                />
                <span className="form__radio-text">Пункт выдачи заказов       Подсосенский пер. д. 11</span>
            </label>
        </div>
        <div className="form__line">
            <label className="form__block map">
                <Map
                    defaultState={{
                    center: [55.7799089, 37.6022092],
                    zoom: 10 ,
                    behaviors: ["drag","multiTouch"]}}
                    width='100%' height='560px'
                >
                    <Placemark
                        geometry={
                            [55.75757899, 37.65163243]}
                        modules= {
                            ['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        properties={{
                            balloonContent: 'Пункт выдачи заказов Подсосенский пер. д. 11',
                            hintContent: "Пункт выдачи заказов Подсосенский пер. д. 11"}}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: local,
                            iconImageSize: [50 , 50],
                            iconImageOffset: [-20, -50]}}
                    />
                    <Placemark
                        geometry={
                            [55.80109025, 37.5081557]}
                        properties={{
                            balloonContent: "Пункт выдачи заказов Песчаная ул., д. 13",
                            hintContent: "Пункт выдачи заказов Песчаная ул., д. 13"}}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: local,
                            iconImageSize: [50, 50],
                            iconImageOffset: [-20, -50]}}
                    />
                    <ZoomControl options={{ float: 'right' }} />
                </Map>
            </label>
        </div>
        <div className="form__line">
            <label className="form__submit">
                <input type="submit" className="form__btn" value="Оформить заказ" disabled={pickupForm.isSubmitting}/>
            </label>
        </div>
    </form>
    )
};