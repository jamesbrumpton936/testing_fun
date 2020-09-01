Feature("James Brumpton's Caspar Automation Test");

Scenario('Signing into the app only to realise you do not want to workout today', (I) => {
  //Sign in page
  let email = '#com.casparhealth.android.patient:id/email_text';
  let password = '#com.casparhealth.android.patient:id/password_text';
  let clinicVideo = '#com.casparhealth.android.patient:id/clinicVideoItem';

  //My Activities page
  let myTrainingCard = '#com.casparhealth.android.patient:id/my_training_card';
  let knowledgeCard = '#com.casparhealth.android.patient:id/knowledge_card';
  let wellbeingCard = '#com.casparhealth.android.patient:id/relaxing_card';
  let stepCounterCard = '#com.casparhealth.android.patient:id/activities_container';
  let actionMore = '#com.casparhealth.android.patient:id/action_more'

  //My Training page
  let exerciseCount = '#com.casparhealth.android.patient:id/count_time_layout';
  let welcomeBackWindow = '#android:id/content'
  let feelingUnwellWindow = '#android:id/content'
  let closeExerciseVideo = '#com.casparhealth.android.patient:id/close_button';
  
  //More Page
  let moreMenu = '#com.casparhealth.android.patient:id/linear'
  
  I.runOnAndroid(() => {
    //Start up image carousell
    I.see('Your individual therapy plan. Always with you.');

    I.touchPerform([{
      action: 'press',
      options: {
        x: 1200,
        y: 1400
      }
    }, {
      action: 'moveTo',
      options: {
        x: 200,
        y: 1400
      }
    }, {action: 'release'}]);

    I.see('Helpful instructions to do your exercises anywhere.');

    I.touchPerform([{
      action: 'press',
      options: {
        x: 1200,
        y: 1400
      }
    }, {
      action: 'moveTo',
      options: {
        x: 200,
        y: 1400
      }
    }, {action: 'release'}]);

    I.see('Always connected with your therapist for feedback and advice.');
    I.tap('SIGN IN');

    //Sign-in screen
    I.fillField(email, '');
    I.fillField(password, '');
    I.tap('SIGN IN');

    //Initial clinic video
    I.see("Welcome to Chris' migrated clinic");
    I.seeElement(clinicVideo);
    I.tap('Not Now');

    //My Activities page
    I.seeElement(myTrainingCard);
    I.seeElement(knowledgeCard);
    I.seeElement(wellbeingCard);
    I.seeElement(stepCounterCard);
    I.tap('My Training');

    //My Training page
    I.see('My Training');
    I.seeElement(exerciseCount);
    I.tap("I'M READY");

    //Exercise video page
    I.seeElement(welcomeBackWindow);
    I.tap('I AM NOT FEELING WELL');
    I.seeElement(feelingUnwellWindow);
    I.tap('OK, I UNDERSTAND');
    I.tap(closeExerciseVideo);
    I.tap('YES, QUIT');
    I.tap(actionMore);

    //More page
    I.see('More');
    I.seeElement(moreMenu);
    I.tap('LOGOUT');
  });
});
