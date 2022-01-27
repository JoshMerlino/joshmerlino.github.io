declare namespace API {
    interface Root {
        success: boolean;
    }

    interface RequestData extends Root {
        history?: Series[];
    }
}