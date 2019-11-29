import {StyleSheet} from 'react-native'

export const mainStyle = StyleSheet.create({
    mainFrame:{
        backgroundColor: "#FFF",
        flex: 12,
        width:"100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"center",
    },

    headerContainer: {
        backgroundColor: "#fff",
        width:"100%",
        height:50,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        borderBottomWidth:1,
        borderBottomColor: "#e1e1e1"
    },

    sectionCentered:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width:"100%"
    },

    bgItem:{
        position:"absolute",
        width:800,
        height:"100%",
        borderBottomRightRadius:800/2,
        borderBottomLeftRadius:800/2,
    },


    sectionLeft:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width:"100%"
    },

    scheduleitemMain:{
        padding:0,
        width: "100%",
        height: 260,
        backgroundColor:"#fff",
        borderColor:"#fff",
        borderRadius: 20,
        borderWidth:1,
        marginBottom: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2
    },

    scheduleItem: {
        padding:0,
        width: "100%",
        height: 55,
        backgroundColor:"#fff",
        borderColor:"transparent",
        borderRadius: 12,
        borderWidth:1,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2
    },

    scheduleItem2: {
        padding:0,
        width: "100%",
        height: 55,
        borderColor:"#FFCCC2",
        borderRadius: 100,
        borderWidth:1,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"#FFCCC2",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2
    },

    scheduleclockMain:{
        marginTop:15,
        width: "29%",
        height:53,
        backgroundColor:"#FFCCC2",
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
    },

    scheduleClock:{
        width: "29%",
        height:53,
        backgroundColor:"#FFCCC2",
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        justifyContent:"center",
        alignItems:"center",
    },

    schedulephotoMain:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginTop:20,
        marginLeft:5,
        marginRight:5
    },

    scheduledescMain:{
        width: "90%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:10,
        textAlign:"center"
    },

    scheduleDesc:{
        width: "70%",
        height:50,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingLeft:10
    },

    containerVet:{
        width:"100%",
        justifyContent:"flex-start",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:20,
        height:100,
        backgroundColor:"#fff",
        borderRadius:20,
        borderColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2
    },

    vet:{
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#FFF",
        width:"50%",
        height:280,
        margin:5,
        borderRadius:30,
        borderColor:"#fff",
        borderWidth:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2
    },

    vetPhoto:{
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        width: "30%",
        height: 110,
        marginBottom:10
    },

    vetPhoto2:{
        width:70,
        height:70,
        borderRadius:70/2,
        marginLeft:5
    },

    vetContent:{
        marginLeft:20,
        height:110,
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        width:"65%",
    },

    vetCTA:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        width:"65%",
    },

    vetName:{
        fontWeight:"bold",
        fontSize:18,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"left",
    },

    vetExp:{
        width:"90%",
        fontSize:12,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },

    vetLoc:{
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"left",
        color:"grey",
        flexDirection:"row",
        marginBottom:20,
        fontStyle:"italic"
    },

    newsCard:{
        width:"100%",
        height:280,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:5,
        borderRadius:30
    },

    newsOverlayBg:{
        width:"100%",
        backgroundColor:"rgba(0, 0, 0, 0.5)",
        opacity:1,
        height:100,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"flex-start",
        alignItems:"center",

    },

    newsOverlay:{
        width:"90%",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingTop:5
    },

    headlineNewsOverlay:{
        color:"#ffffff",
        fontWeight:"bold",
        fontFamily:"JosefinSans-Bold",
        fontSize:18
    },

    shortNewsOverlay:{
        color:"#ffffff",
        fontFamily:"Lato-Regular",
        fontSize:14,
        marginTop:5
    },

    //Care --

    mapDisplay:{
      width:"100%",
      height:400,
      borderBottomWidth:1,
      borderBottomColor:"#000",
      justifyContent:"flex-start",
      alignItems:"center"
    },

    searchBarContainer:{
        width:"80%",
        flexDirection:"row",
        position:"absolute",
        top:50
    },

    searchInput:{
        height: 45,
        borderColor: "#C6C6C6",
        borderWidth: 1,
        width:250,
        backgroundColor:"#C6C6C6",
        borderRadius:18,
        marginRight:10
    },

    searchPicker:{
        height: 45,
        borderColor: "#C6C6C6",
        borderWidth: 1,
        width:60,
        backgroundColor:"#C6C6C6",
        borderRadius:18,
    },

    //Profile --

    sectionBg:{
        width:"100%",
        height:400,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    profPhoto:{
        width:100,
        height:100,
        borderRadius:100/2,
        marginTop:45
    },

    profName:{
        fontSize:20,
        color:"#FFF",
        fontWeight: "100",
        letterSpacing: 1,
    },

    profBirthday:{
        fontSize:14,
        color:"#fff",
        fontWeight:"100",
    },

    profMail:{
        fontSize:14,
        color:"#fff",
        fontWeight:"100",
        marginBottom:20
    },

    //Pet --

    petCard:{
        marginBottom:10,
        padding:10,
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        height:120,
        borderRadius:10,
        borderColor:"#fff",
        backgroundColor:"#fff",
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    petPhoto:{
        width:80,
        height:80,
        borderRadius:100/2,
        marginRight:20
    },

    petInfo:{
        height:"90%",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },

    petName:{
        fontWeight:"bold",
        fontSize:18
    },

    petBreedAge:{
        flexDirection:"row",
        marginBottom:5
    },

    // Chat --

    chatItem:{
        width:"100%",
        flexDirection:"row",
        marginBottom:20,
        borderBottomWidth:1,
        borderColor:"#e1e1e1e1",
        paddingBottom:10
    },

    chatPhoto:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:20
    },

    //Headline --

    headline1:{
        fontFamily:"JosefinSlab-Regular",
        color:"#000",
        fontSize:24
    },

    //Button --

    button1:{
        justifyContent:"center",
        alignItems:"center",
        width:180,
        height:50,
        borderRadius:100,
        backgroundColor:"#00D6C0",
        fontSize:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    button2:{
        justifyContent:"center",
        alignItems:"center",
        width:120,
        borderRadius:100,
        backgroundColor:"#00D6C0",
        fontSize:15,
        height:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2,
    },

    button3:{
        marginRight:5,
        marginLeft:5,
        justifyContent:"center",
        alignItems:"center",
        width:120,
        borderRadius:100,
        borderColor:"#fff",
        borderWidth:1,
        backgroundColor:"transparent",
        fontSize:15,
        height:30,
    },

    button4:{
        marginRight:5,
        justifyContent:"center",
        alignItems:"center",
        width:30,
        height:30,
        borderRadius:30/2,
        backgroundColor:"#00D6C0",
        borderColor:"#00D6C0",
        borderWidth:1,
        fontSize:15,
    },

    buttonCareCTA1:{
        width:80,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30/2,
        backgroundColor:"#FF8181",
        borderColor:"#FF8181",
        borderWidth:1,
        fontSize:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2,
        marginRight:5
    },

    buttonCareCTA2:{
        width:80,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30/2,
        backgroundColor:"#FFCA81",
        borderColor:"#FFCA81",
        borderWidth:1,
        fontSize:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 2,
        marginRight:5
    }





})
