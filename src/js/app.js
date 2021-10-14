import locations from "./store/locations";
import '../css/style.css'
import './plugins/index'
import formUI from "./views/form";

document.addEventListener('DOMContentLoaded', () => {
    initApp()
    const form = formUI.form

    // events
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        onFormSubmit()
    })

    //handlers
    async function initApp() {
        await locations.init()
        formUI.setAutocompleteData(locations.shortCitiesList)
    }
    async function onFormSubmit() {
        //get data from inputs
        const origin = formUI.originValue
        const destination = formUI.destinationValue
        const depart_date = formUI.departDateValue
        const return_date = formUI.returnDateValue
    }
})