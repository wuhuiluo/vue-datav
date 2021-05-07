export default {
    computed: {
        reportData() {
            return this.getReportData();
        },
    },
    inject: ["getReportData", "getWordData", "getMapData"],
}