import { makeStyles } from "@material-ui/core/styles"

const Styles = makeStyles({
    rootApp: {
        marginTop: 20
    },
    image: {
        width: "100%",
        height: 250
    },
    containerItem: {
        position: "relative",
        border: "1px solid #ccc",
        width: "100%",
        borderRadius: 4,
        padding: 5,
        minHeight: 300,
        boxShadow: "1px 1px 10px  #ccc"
    },
    itemFooter: {
        display: "flex",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default Styles;