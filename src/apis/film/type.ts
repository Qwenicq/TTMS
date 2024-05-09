export interface filmData {
    "ID": number,
    "CreatedAt": string,
    "UpdatedAt": string,
    "DeletedAt": null,
    "Picture": string,
    "Info": string,
    "Name": string,
    "Director": string,
    "Actor": string,
    "Duration": number,
    "release_time": string,
    "Money": number,
    "Online": boolean,
    "ticket_num": number,
    "total": number,
    "count": number,
    "average": number
}

export interface theatreInfo {
    "ID": number,
    "CreatedAt": string,
    "UpdatedAt": string,
    "DeletedAt": null,
    "Name": string,
    "Seat": string,
    "N": number,
    "M": number,
    "Info":string,
    "Inuse": number,
    "Num": number,
    "Plays": string
}

