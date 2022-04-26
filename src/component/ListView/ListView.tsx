import React from "react";
import { ReactElement } from "react";
import ListItem from "../ListItem/ListItem";

interface Data {
    name: string;
    stargazers_count: number;
}

interface ListViewProps {
    data: Data[];
}

const ListView = ({ data }: ListViewProps ): ReactElement | null => {
    if (data.length === 0) return null;
    return data.map((item: Data) => <ListItem
                                        key={item.name}
                                        primaryText={item.name}
                                        secondaryText={item.stargazers_count}
                                    />) as unknown as ReactElement;
}

export default ListView;
