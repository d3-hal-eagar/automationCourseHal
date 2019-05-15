class Campaign {
    open() {
        $('.vertical-tabs__menu a[href="#edit-group-campaign"]').click();
    }

    enterCampaignInfo(options) {
        $("input#edit-name-0-value").setValue(options.campaignTitle);
        $("textarea#edit-f-project-overview-0-value").setValue(
            options.description
        );
        // mmddyyyy
        $("input#edit-f-date-0-value-date").setValue(options.startDate);
        $("input#edit-f-date-0-end-value-date").setValue(options.endDate);
    }
}

module.exports.Campaign = Campaign
