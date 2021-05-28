<template>
  <section class="content">
    <content-header title="Widgets"/>

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <h5 class="mb-2">Info Box</h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    bgColor="bg-info"
                    bgIcon="far fa-envelope"
                    text="Messages"
                    number="1410"
                    numberType="comma">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    bgColor="bg-success"
                    bgIcon="far fa-flag"
                    text="Bookmarks"
                    number="410">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    bgColor="bg-warning"
                    bgIcon="far fa-copy"
                    text="Uploads"
                    number="13648"
                    numberType="comma">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    bgColor="bg-danger"
                    bgIcon="far fa-star"
                    text="Likes"
                    number="93139"
                    numberType="comma">
            </va-info-box>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- =========================================================== -->
        <h5 class="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="info"
                    bgIcon="far fa-bookmark"
                    text="Bookmarks"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[0].isProgress"
                    :percentage="infoBox[0].percentage"
                    :progressDescription="`${infoBox[0].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="success"
                    bgIcon="far fa-thumbs-up"
                    text="Likes"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[1].isProgress"
                    :percentage="infoBox[1].percentage"
                    :progressDescription="`${infoBox[1].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="warning"
                    bgIcon="far fa-calendar-alt"
                    text="Events"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[0].isProgress"
                    :percentage="infoBox[0].percentage"
                    :progressDescription="`${infoBox[0].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="danger"
                    bgIcon="far fa-comments"
                    text="Comments"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[1].isProgress"
                    :percentage="infoBox[1].percentage"
                    :progressDescription="`${infoBox[1].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- =========================================================== -->
        <h5 class="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="info"
                    :isGradient="true"
                    bgIcon="far fa-bookmark"
                    text="Bookmarks"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[0].isProgress"
                    :percentage="infoBox[0].percentage"
                    :progressDescription="`${infoBox[0].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="success"
                    :isGradient="true"
                    bgIcon="far fa-thumbs-up"
                    text="Likes"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[1].isProgress"
                    :percentage="infoBox[1].percentage"
                    :progressDescription="`${infoBox[1].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="warning"
                    :isGradient="true"
                    bgIcon="far fa-calendar-alt"
                    text="Events"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[0].isProgress"
                    :percentage="infoBox[0].percentage"
                    :progressDescription="`${infoBox[0].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <va-info-box
                    wrapBgColor="danger"
                    :isGradient="true"
                    bgIcon="far fa-comments"
                    text="Comments"
                    number="41410"
                    numberType="comma"
                    :isProgress="infoBox[1].isProgress"
                    :percentage="infoBox[1].percentage"
                    :progressDescription="`${infoBox[1].percentage}% Increase in 30 Days`">
            </va-info-box>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- =========================================================== -->

        <!-- Small Box (Stat card) -->
        <h5 class="mb-2 mt-4">Small Box</h5>
        <div class="row">
          <div class="col-lg-3 col-6">
            <va-small-box
                    color="info"
                    icon="ion-bag"
                    title="150"
                    description="New Orders"
                    @more-click="clickToSmallBox"
                    moreText="More info">
            </va-small-box>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <va-small-box
                    color="success"
                    icon="ion-stats-bars"
                    title="53%"
                    description="Bounce Rate"
                    @more-click="clickToSmallBox"
                    moreText="More info">
            </va-small-box>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <va-small-box
                    color="warning"
                    icon="ion-person-add"
                    title="44"
                    description="User Registrations"
                    @more-click="clickToSmallBox"
                    moreText="More info">
            </va-small-box>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <va-small-box
                    color="danger"
                    icon="ion-pie-graph"
                    title="65"
                    description="Unique Visitors"
                    @more-click="clickToSmallBox"
                    moreText="More info">
            </va-small-box>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <!-- =========================================================== -->
        <h4 class="mb-2 mt-4">Cards</h4>
        <h5 class="mb-2">Abilities</h5>
        <div class="row">
          <div class="col-md-3">
            <va-card
                theme="primary"
                title="Expandable"
                widgetType="collapse"
                :isOpen="false">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                 theme="success"
                 widgetType="collapse"
                 title="Collapsable">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                theme="warning"
                widgetType="remove"
                title="Removable">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                 theme="danger"
                 widgetType="maximize"
                 title="Maximizable">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- =========================================================== -->
        <div class="row">
          <div class="col-md-3">
            <va-card
                theme="primary"
                widgetType="card-refresh"
                title="Card Refresh">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="warning"
                    widgetSet="+max"
                    title="Tree">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <div class="col-md-3">
            <va-card
                 theme="success"
                 widgetSet="all"
                 title="All together">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                theme="danger"
                title="Loading state"
                loading="default">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-md-3">
            <va-card
                    theme="danger"
                    title="Loading state (dark)"
                    loading="dark">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
        </div>
        <!-- =========================================================== -->
        <h5 class="mb-2">Colors Variations</h5>

        <div class="row">
          <div class="col-md-3">
            <va-card
                    theme="primary"
                    widgetType="collapse"
                    title="Primary">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="success"
                    widgetType="remove"
                    title="Success">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="warning"
                    widgetType="collapse"
                    title="Warning">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                  theme="danger"
                  title="Danger">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- =========================================================== -->

        <div class="row">
          <div class="col-md-3">
            <va-card
               theme="primary"
               :isOutline="true"
               widgetType="collapse"
               title="Primary Outline">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="success"
               :isOutline="true"
               widgetType="remove"
               title="Success Outline">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="warning"
               :isOutline="true"
               widgetType="collapse"
               title="Warning Outline">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="danger"
               :isOutline="true"
               title="Danger Outline">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
        <!-- =========================================================== -->

        <div class="row">
          <div class="col-md-3">
            <va-card
                    theme="primary"
                    :isBgColor="true"
                    widgetType="collapse"
                    title="Primary">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="success"
                    :isBgColor="true"
                    widgetType="remove"
                    title="Success">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="warning"
                    :isBgColor="true"
                    widgetType="collapse"
                    title="Warning">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
                    theme="danger"
                    :isBgColor="true"
                    title="Danger">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->


        <!-- =========================================================== -->

        <div class="row">
          <div class="col-md-3">
            <va-card
               theme="primary"
               :isGradient="true"
               widgetType="collapse"
               title="Primary Gradient">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="success"
               :isGradient="true"
               widgetType="remove"
               title="Success Gradient">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="warning"
               :isGradient="true"
               widgetType="collapse"
               title="Warning Gradient">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
            <!-- /.card -->
          </div>
          <!-- /.col -->
          <div class="col-md-3">
            <va-card
               theme="danger"
               :isGradient="true"
               title="Danger Gradient">
              <div slot="content">
                The body of the card
              </div>
            </va-card>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- =========================================================== -->

        <!-- Direct Chat -->
        <h4 class="mt-4 mb-2">Direct Chat</h4>
        <div class="row">
          <div class="col-md-3">
            <!-- DIRECT CHAT PRIMARY -->
            <va-direct-chat
                    id="dirChat1"
                    theme="primary"
                    :isOutline="true"
                    :talkList="talkList"
                    :contacts="contacts"
                    title="Direct Chat"
                    :badgeCount="3"
                    placeholder="Type Message...">
            </va-direct-chat>

          </div>
          <!-- /.col -->

          <div class="col-md-3">
            <!-- DIRECT CHAT SUCCESS -->
            <va-direct-chat
                    id="dirChat2"
                    theme="success"
                    :isOutline="true"
                    :talkList="talkList"
                    :contacts="contacts"
                    title="Direct Chat"
                    :badgeCount="3"
                    placeholder="Type Message...">
            </va-direct-chat>
          </div>
          <!-- /.col -->

          <div class="col-md-3">
            <!-- DIRECT CHAT WARNING -->
            <va-direct-chat
                    id="dirChat3"
                    theme="warning"
                    :talkList="talkList"
                    :contacts="contacts"
                    title="Direct Chat"
                    :badgeCount="3"
                    placeholder="Type Message...">
            </va-direct-chat>
          </div>
          <!-- /.col -->

          <div class="col-md-3">
            <!-- DIRECT CHAT DANGER -->
            <va-direct-chat
                    id="dirChat4"
                    theme="danger"
                    :talkList="talkList"
                    :contacts="contacts"
                    title="Direct Chat"
                    :badgeCount="3"
                    placeholder="Type Message...">
            </va-direct-chat>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <h3 class="mt-4 mb-4">Social Widgets</h3>

        <div class="row">
          <div class="col-md-4">
            <social-user-v2
                    name="Nadia Carmichael"
                    description="Lead Developer"
                    profileImage="static/img/user7-128x128.jpg"
                    :list="socialDataList[0]"
            ></social-user-v2>
          </div>
          <!-- /.col -->
          <div class="col-md-4">
            <social-user-v1
                    name="Alexander Pierce"
                    description="Founder &amp; CEO"
                    profileImage="static/img/user1-128x128.jpg"
                    :infoList="socialDataList[1]"
            ></social-user-v1>
          </div>
          <!-- /.col -->
          <div class="col-md-4">
            <social-user-v1
                    name="Elizabeth Pierce"
                    description="Web Designer"
                    profileImage="static/img/user3-128x128.jpg"
                    :infoList="socialDataList[2]"
                    :isBackgroundImage="true"
                    BackgroundImage="/static/img/photo1.png"
            ></social-user-v1>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row">
          <div class="col-md-6">
            <social-box
                 :name="socialBoxList[0].name"
                 :description="socialBoxList[0].description"
                 :profileImage="socialBoxList[0].profileImage"
                 :images="socialBoxList[0].images"
                 :text="socialBoxList[0].text"
                 :buttons="socialBoxList[0].buttons"
                 :likeCount="socialBoxList[0].likeCount"
                 :commentCount="socialBoxList[0].commentCount"
                 :comments="socialBoxList[0].comments">
            </social-box>

          </div>
          <!-- /.col -->
          <div class="col-md-6">
            <social-box
                    :name="socialBoxList[1].name"
                    :description="socialBoxList[1].description"
                    :profileImage="socialBoxList[1].profileImage"
                    :text="socialBoxList[1].text"
                    :buttons="socialBoxList[1].buttons"
                    :likeCount="socialBoxList[1].likeCount"
                    :commentCount="socialBoxList[1].commentCount"
                    :comments="socialBoxList[1].comments"
                    :attachments="socialBoxList[1].attachments">
            </social-box>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </section>
</template>

<script>
    import ContentHeader from '@/layout/components/Content/ContentHeader.vue'
    import SocialUserV1 from '@/components/Widgets/SocialUser/SocialUser.v1.vue'
    import SocialUserV2 from '@/components/Widgets/SocialUser/SocialUser.v2.vue'
    import SocialBox from '@/components/Widgets/SocialBox'

    export default {
        name: "Widgets",
        components: { ContentHeader, SocialUserV1, SocialUserV2, SocialBox },
        data () {
            return {
                infoBox: [
                    {
                        isProgress: true,
                        percentage: 70
                    },
                    {
                        isProgress: true,
                        percentage: 30
                    }
                ],
                talkList: require('@/libs/default/pages/DirectChatData.js'),
                contacts : require('@/libs/default/pages/Contacts.js'),
                socialDataList: require('@/libs/default/pages/SocialDataList.js'),
                socialBoxList: [
                    {
                        name: 'Jonathan Burke Jr.',
                        profileImage: 'static/img/user1-128x128.jpg',
                        description: 'Shared publicly - 7:30 PM Today',
                        images: [
                            'static/img/photo2.png'
                        ],
                        text: 'I took this photo this morning. What do you guys think?',
                        buttons: [
                            {
                                name: 'Share',
                                icon: 'fa fa-share',
                                onClick: this.clickToShare
                            },
                            {
                                name: 'Likes',
                                icon: 'far fa-thumbs-up',
                                onClick: this.clickToLike
                            }
                        ],
                        likeCount: 127,
                        commentCount: 3,
                        comments: [
                            {
                                name: 'Maria Gonzales',
                                profileImage: 'static/img/user3-128x128.jpg',
                                text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                date: new Date()
                            },
                            {
                                name: 'Luna Stark',
                                profileImage: 'static/img/user4-128x128.jpg',
                                text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                date: new Date()
                            }
                        ]
                    },
                    {
                        name: 'Jonathan Burke Jr.',
                        profileImage: 'static/img/user1-128x128.jpg',
                        description: 'Shared publicly - 7:30 PM Today',
                        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
                        buttons: [
                            {
                                name: 'Share',
                                icon: 'fa fa-share',
                                onClick: this.clickToShare
                            },
                            {
                                name: 'Likes',
                                icon: 'far fa-thumbs-up',
                                onClick: this.clickToLike
                            }
                        ],
                        likeCount: 45,
                        commentCount: 2,
                        comments: [
                            {
                                name: 'Maria Gonzales',
                                profileImage: 'static/img/user3-128x128.jpg',
                                text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                                date: new Date()
                            },
                            {
                                name: 'Nora Havisham',
                                profileImage: 'static/img/user5-128x128.jpg',
                                text: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
                                date: new Date()
                            }
                        ],
                        attachments: [
                            {
                                title: 'Lorem ipsum text generator',
                                image: 'static/img/photo1.png',
                                text: 'Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                            }
                        ]
                    }
                ]
            }
        },

        methods: {
            clickToShare () {
                alert('click to shere')
            },
            clickToLike () {
                alert('click to like')
            },
            clickToSmallBox () {
                alert('click!!!: clickToSmallBox')
            }
        }
    }
</script>

<style scoped>

</style>
