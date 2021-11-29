import { render } from "@testing-library/react";
import AppProviders from "../AppProviders";

export const renderWithProviders = (component) => {
    return render(
        <AppProviders>
            {component}
        </AppProviders>
    )
}