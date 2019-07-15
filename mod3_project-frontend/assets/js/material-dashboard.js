let selectedApplication = null;
const editApplicationForm = document.querySelector("#editApplicationForm");
const createNewApplicationForm = document.querySelector(
  "#createNewApplicationForm"
);
const newTaskForm = document.querySelector("#createNewTaskForm");
const deleteApplicationButton = document.querySelector(
  "#deleteApplicationButton"
);
let newJobs = [];
/*!

 =========================================================
 * Material Dashboard - v2.1.1
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// From the template
(function() {
  isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();

    $("html").addClass("perfect-scrollbar-on");
  } else {
    $("html").addClass("perfect-scrollbar-off");
  }
})();

var breakCards = true;

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
  mobile_menu_initialized = false,
  toggle_initialized = false,
  bootstrap_nav_initialized = false;

var seq = 0,
  delays = 80,
  durations = 500;
var seq2 = 0,
  delays2 = 80,
  durations2 = 500;

$(document).ready(function() {
  $("body").bootstrapMaterialDesign();

  $sidebar = $(".sidebar");

  md.initSidebarsCheck();

  window_width = $(window).width();

  // check if there is an image set for the sidebar's background
  md.checkSidebarImage();

  //    Activate bootstrap-select
  if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker();
  }

  //  Activate the tooltips
  $('[rel="tooltip"]').tooltip();

  $(".form-control")
    .on("focus", function() {
      $(this)
        .parent(".input-group")
        .addClass("input-group-focus");
    })
    .on("blur", function() {
      $(this)
        .parent(".input-group")
        .removeClass("input-group-focus");
    });

  // remove class has-error for checkbox validation
  $(
    'input[type="checkbox"][required="true"], input[type="radio"][required="true"]'
  ).on("click", function() {
    if ($(this).hasClass("error")) {
      $(this)
        .closest("div")
        .removeClass("has-error");
    }
  });
});

$(document).on("click", ".navbar-toggler", function() {
  $toggle = $(this);

  if (mobile_menu_visible == 1) {
    $("html").removeClass("nav-open");

    $(".close-layer").remove();
    setTimeout(function() {
      $toggle.removeClass("toggled");
    }, 400);

    mobile_menu_visible = 0;
  } else {
    setTimeout(function() {
      $toggle.addClass("toggled");
    }, 430);

    var $layer = $('<div class="close-layer"></div>');

    if ($("body").find(".main-panel").length != 0) {
      $layer.appendTo(".main-panel");
    } else if ($("body").hasClass("off-canvas-sidebar")) {
      $layer.appendTo(".wrapper-full-page");
    }

    setTimeout(function() {
      $layer.addClass("visible");
    }, 100);

    $layer.click(function() {
      $("html").removeClass("nav-open");
      mobile_menu_visible = 0;

      $layer.removeClass("visible");

      setTimeout(function() {
        $layer.remove();
        $toggle.removeClass("toggled");
      }, 400);
    });

    $("html").addClass("nav-open");
    mobile_menu_visible = 1;
  }
});

// activate collapse right menu when the windows is resized
$(window).resize(function() {
  md.initSidebarsCheck();

  // reset the seq for charts drawing animations
  seq = seq2 = 0;

  setTimeout(function() {
    md.initDashboardPageCharts();
  }, 500);
});

md = {
  misc: {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0
  },

  checkSidebarImage: function() {
    $sidebar = $(".sidebar");
    image_src = $sidebar.data("image");

    if (image_src !== undefined) {
      sidebar_container =
        '<div class="sidebar-background" style="background-image: url(' +
        image_src +
        ') "/>';
      $sidebar.append(sidebar_container);
    }
  },

  showNotification: function(from, align, notification) {
    type = ["", "info", "danger", "success", "warning", "rose", "primary"];

    color = Math.floor(Math.random() * 6 + 1);

    $.notify(
      {
        icon: "add_alert",
        message: notification
      },
      {
        type: type[color],
        timer: 3000,
        placement: {
          from: from,
          align: align
        }
      }
    );
  },

  initDocumentationCharts: function() {
    if (
      $("#dailySalesChart").length != 0 &&
      $("#websiteViewsChart").length != 0
    ) {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      dataDailySalesChart = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[12, 17, 7, 17, 23, 18, 38]]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      };

      var dailySalesChart = new Chartist.Line(
        "#dailySalesChart",
        dataDailySalesChart,
        optionsDailySalesChart
      );

      var animationHeaderChart = new Chartist.Line(
        "#websiteViewsChart",
        dataDailySalesChart,
        optionsDailySalesChart
      );
    }
  },

  initFormExtendedDatetimepickers: function() {
    $(".datetimepicker").datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    });

    $(".datepicker").datetimepicker({
      format: "MM/DD/YYYY",
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    });

    $(".timepicker").datetimepicker({
      //          format: 'H:mm',    // use this format if you want the 24hours timepicker
      format: "h:mm A", //use this format if you want the 12hours timpiecker with AM/PM toggle
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: "fa fa-chevron-left",
        next: "fa fa-chevron-right",
        today: "fa fa-screenshot",
        clear: "fa fa-trash",
        close: "fa fa-remove"
      }
    });
  },

  initSliders: function() {
    // Sliders for demo purpose
    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  },

  initSidebarsCheck: function() {
    if ($(window).width() <= 991) {
      if ($sidebar.length != 0) {
        md.initRightMenu();
      }
    }
  },

  checkFullPageBackgroundImage: function() {
    $page = $(".full-page");
    image_src = $page.data("image");

    if (image_src !== undefined) {
      image_container =
        '<div class="full-page-background" style="background-image: url(' +
        image_src +
        ') "/>';
      $page.append(image_container);
    }
  },

  initDashboardPageCharts: function() {
    if (
      $("#dailySalesChart").length != 0 ||
      $("#completedTasksChart").length != 0 ||
      $("#websiteViewsChart").length != 0
    ) {
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      dataDailySalesChart = {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[12, 17, 7, 17, 23, 18, 38]]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      };

      var dailySalesChart = new Chartist.Line(
        "#dailySalesChart",
        dataDailySalesChart,
        optionsDailySalesChart
      );

      md.startAnimationForLineChart(dailySalesChart);

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      dataCompletedTasksChart = {
        labels: ["12p", "3p", "6p", "9p", "12p", "3a", "6a", "9a"],
        series: [[230, 750, 450, 300, 280, 240, 200, 190]]
      };

      optionsCompletedTasksChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      };

      var completedTasksChart = new Chartist.Line(
        "#completedTasksChart",
        dataCompletedTasksChart,
        optionsCompletedTasksChart
      );

      // start animation for the Completed Tasks Chart - Line Chart
      md.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
      };
      var optionsWebsiteViewsChart = {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      };
      var responsiveOptions = [
        [
          "screen and (max-width: 640px)",
          {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function(value) {
                return value[0];
              }
            }
          }
        ]
      ];
      var websiteViewsChart = Chartist.Bar(
        "#websiteViewsChart",
        dataWebsiteViewsChart,
        optionsWebsiteViewsChart,
        responsiveOptions
      );

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(websiteViewsChart);
    }
  },

  initMinimizeSidebar: function() {
    $("#minimizeSidebar").click(function() {
      var $btn = $(this);

      if (md.misc.sidebar_mini_active == true) {
        $("body").removeClass("sidebar-mini");
        md.misc.sidebar_mini_active = false;
      } else {
        $("body").addClass("sidebar-mini");
        md.misc.sidebar_mini_active = true;
      }

      // we simulate the window Resize so the charts will get updated in realtime.
      var simulateWindowResize = setInterval(function() {
        window.dispatchEvent(new Event("resize"));
      }, 180);

      // we stop the simulation of Window Resize after the animations are completed
      setTimeout(function() {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > 260) {
      if (transparent) {
        transparent = false;
        $(".navbar-color-on-scroll").removeClass("navbar-transparent");
      }
    } else {
      if (!transparent) {
        transparent = true;
        $(".navbar-color-on-scroll").addClass("navbar-transparent");
      }
    }
  }, 17),

  initRightMenu: debounce(function() {
    $sidebar_wrapper = $(".sidebar-wrapper");

    if (!mobile_menu_initialized) {
      $navbar = $("nav")
        .find(".navbar-collapse")
        .children(".navbar-nav");

      mobile_menu_content = "";

      nav_content = $navbar.html();

      nav_content =
        '<ul class="nav navbar-nav nav-mobile-menu">' + nav_content + "</ul>";

      navbar_form = $("nav")
        .find(".navbar-form")
        .get(0).outerHTML;

      $sidebar_nav = $sidebar_wrapper.find(" > .nav");

      // insert the navbar form before the sidebar list
      $nav_content = $(nav_content);
      $navbar_form = $(navbar_form);
      $nav_content.insertBefore($sidebar_nav);
      $navbar_form.insertBefore($nav_content);

      $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(
        event
      ) {
        event.stopPropagation();
      });

      // simulate resize so all the charts/maps will be redrawn
      window.dispatchEvent(new Event("resize"));

      mobile_menu_initialized = true;
    } else {
      if ($(window).width() > 991) {
        // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
        $sidebar_wrapper.find(".navbar-form").remove();
        $sidebar_wrapper.find(".nav-mobile-menu").remove();

        mobile_menu_initialized = false;
      }
    }
  }, 200),

  startAnimationForLineChart: function(chart) {
    chart.on("draw", function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq = 0;
  },
  startAnimationForBarChart: function(chart) {
    chart.on("draw", function(data) {
      if (data.type === "bar") {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    });

    seq2 = 0;
  },

  initFullCalendar: function() {
    $calendar = $("#fullCalendar");

    today = new Date();
    y = today.getFullYear();
    m = today.getMonth();
    d = today.getDate();

    $calendar.fullCalendar({
      viewRender: function(view, element) {
        // We make sure that we activate the perfect scrollbar when the view isn't on Month
        if (view.name != "month") {
          $(element)
            .find(".fc-scroller")
            .perfectScrollbar();
        }
      },
      header: {
        left: "title",
        center: "month,agendaWeek,agendaDay",
        right: "prev,next,today"
      },
      defaultDate: today,
      selectable: true,
      selectHelper: true,
      views: {
        month: {
          // name of view
          titleFormat: "MMMM YYYY"
          // other view-specific options here
        },
        week: {
          titleFormat: " MMMM D YYYY"
        },
        day: {
          titleFormat: "D MMM, YYYY"
        }
      },

      select: function(start, end) {
        // on select we show the Sweet Alert modal with an input
        swal({
          title: "Create an Event",
          html:
            '<div class="form-group">' +
            '<input class="form-control" placeholder="Event Title" id="input-field">' +
            "</div>",
          showCancelButton: true,
          confirmButtonClass: "btn btn-success",
          cancelButtonClass: "btn btn-danger",
          buttonsStyling: false
        })
          .then(function(result) {
            var eventData;
            event_title = $("#input-field").val();

            if (event_title) {
              eventData = {
                title: event_title,
                start: start,
                end: end
              };
              $calendar.fullCalendar("renderEvent", eventData, true); // stick? = true
            }

            $calendar.fullCalendar("unselect");
          })
          .catch(swal.noop);
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events

      // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
      events: [
        {
          title: "All Day Event",
          start: new Date(y, m, 1),
          className: "event-default"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d - 4, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          id: 999,
          title: "Repeating Event",
          start: new Date(y, m, d + 3, 6, 0),
          allDay: false,
          className: "event-rose"
        },
        {
          title: "Meeting",
          start: new Date(y, m, d - 1, 10, 30),
          allDay: false,
          className: "event-green"
        },
        {
          title: "Lunch",
          start: new Date(y, m, d + 7, 12, 0),
          end: new Date(y, m, d + 7, 14, 0),
          allDay: false,
          className: "event-red"
        },
        {
          title: "Md-pro Launch",
          start: new Date(y, m, d - 2, 12, 0),
          allDay: true,
          className: "event-azure"
        },
        {
          title: "Birthday Party",
          start: new Date(y, m, d + 1, 19, 0),
          end: new Date(y, m, d + 1, 22, 30),
          allDay: false,
          className: "event-azure"
        },
        {
          title: "Click for Creative Tim",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        },
        {
          title: "Click for Google",
          start: new Date(y, m, 21),
          end: new Date(y, m, 22),
          url: "http://www.creative-tim.com/",
          className: "event-orange"
        }
      ]
    });
  },

  initVectorMap: function() {
    var mapData = {
      AU: 760,
      BR: 550,
      CA: 120,
      DE: 1300,
      FR: 540,
      GB: 690,
      GE: 200,
      IN: 200,
      RO: 600,
      RU: 300,
      US: 2920
    };

    $("#worldMap").vectorMap({
      map: "world_mill_en",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },

      series: {
        regions: [
          {
            values: mapData,
            scale: ["#AAAAAA", "#444444"],
            normalizeFunction: "polynomial"
          }
        ]
      }
    });
  }
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

// !!!!#### CODED BY US ####!!!!
let currentUserId = null;
let user = [];

function getUser() {
  const userURL = `http://localhost:3000/users/${currentUserId}`;
  return fetch(userURL).then(resp => resp.json());
}

// SCORECARDS ####
const renderNoOngoingApplications = user => {
  const ongoingApplications = document.getElementById("ongoing-applications");
  const numberOfApplications = user.applications.length;
  ongoingApplications.innerText = numberOfApplications;
};

const renderNoTasks = user => {
  const tasksDueEl = document.getElementById("TasksDue");
  const userApplications = user.applications;
  const userTasks = user.applications
    .map(application =>
      application.tasks.map(task => {
        return task;
      })
    )
    .flat();
  const noTasksDue = userTasks.length;
  tasksDueEl.innerText = noTasksDue;
};

// TABLES

//#### RENDER TASKS ####
const renderTasks = () => {
  const dueTasksTableEl = document.querySelector("#dueTasksTableEl");
  dueTasksTableEl.innerHTML = ``;
  const doneTasksTableEl = document.querySelector("#completeTasksTableEl");
  doneTasksTableEl.innerHTML = ``;
  const userTasks = user.applications
    .map(application =>
      application.tasks.map(task => {
        return task;
      })
    )
    .flat();
  userTasks.forEach(task => {
    if (task.status === false) {
      renderDueTask(task);
    } else {
      renderDoneTask(task);
    }
  });
};

const renderDueTask = task => {
  const dueTasksTableEl = document.querySelector("#dueTasksTableEl");
  const taskEl = document.createElement("tr");
  taskEl.innerHTML = `
  <td id=${task.id}>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input id="completeTaskButton" class="form-check-input" type="checkbox" value="">
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id="taskTableName">${task.name}</td>
                            <td id="taskTableCompany"></td>
                            <td id="taskTableDeadline">${task.deadline}</td>
                            <td class="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                                  <i class="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                                  <i class="material-icons">close</i>
                                </button>
                              </td>`;

  const completeTaskButton = taskEl.querySelector("#completeTaskButton");
  completeTaskButton.addEventListener("click", e =>
    editTaskOnServer(e, task).then(editTaskOnUI(e, task))
  );
  dueTasksTableEl.append(taskEl);
};

const renderDoneTask = task => {
  const doneTasksTableEl = document.querySelector("#completeTasksTableEl");
  const taskEl = document.createElement("tr");
  taskEl.innerHTML = `
  <td id=${task.id}>
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input id="completeTaskButton" class="form-check-input" type="checkbox" checked="" value="">
                                  <span class="form-check-sign">
                                    <span class="check"></span>
                                  </span>
                                </label>
                              </div>
                            </td>
                            <td id="taskTableName">${task.name}</td>
                            <td id="taskTableCompany"></td>
                            <td id="taskTableDeadline">${task.deadline}</td>
                            <td class="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                                  <i class="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                                  <i class="material-icons">close</i>
                                </button>
                              </td>`;

  const completeTaskButton = taskEl.querySelector("#completeTaskButton");
  completeTaskButton.addEventListener("click", e =>
    editTaskOnServer(e, task).then(editTaskOnUI(e, task))
  );

  doneTasksTableEl.append(taskEl);
};

const editTaskOnServer = (e, task) => {
  const taskURL = `http://localhost:3000/tasks/${task.id}`;

  if (task.status === true) {
    task.status = false;
  } else {
    task.status = true;
  }

  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
  };

  return fetch(taskURL, options).then(resp => resp.json());
};

const editTaskOnUI = (e, task) => {
  taskRow = e.target.parentElement.parentElement.parentElement.parentElement;
  taskRow.remove();
  if (task.status === false) {
    renderDueTask(task);
  } else {
    renderDoneTask(task);
  }
};

// #### RENDER APPLICATIONS ####
const renderApplications = () => {
  const applicationTableEl = document.querySelector("#applicationsTable")
    .children[1];
  applicationTableEl.innerHTML = ``;
  const userApplications = user.applications;
  userApplications.forEach(application => {
    renderApplication(application);
  });
};

const renderApplication = application => {
  const applicationTableEl = document.querySelector("#applicationsTable")
    .children[1];
  const applicationEl = document.createElement("tr");
  applicationEl.id = `application-${application.id}`;
  applicationEl.dataset.application_id = application.id;
  const applicationCompanyEl = document.createElement("td");
  applicationCompanyEl.className = "company_name";

  const applicationRoleEl = document.createElement("td");
  applicationRoleEl.className = "role";

  const applicationPersonOfContactEl = document.createElement("td");
  applicationPersonOfContactEl.className = "person_of_contact";

  const applicationButtons = document.createElement("td");
  applicationButtons.className = "td-actions text-right";
  applicationButtons.innerHTML = `
    <button type="button" id="edit" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
      <i class="material-icons">edit</i>
    </button>`;

  const editApplicationButton = applicationButtons.querySelector("#edit");

  editApplicationButton.addEventListener("click", () => {
    selectedApplication = application;
    editApplication();
  });

  applicationCompanyEl.innerText = application.company_name;
  applicationRoleEl.innerText = application.role;
  applicationPersonOfContactEl.innerText = application.person_of_contact;

  applicationEl.append(
    applicationCompanyEl,
    applicationRoleEl,
    applicationPersonOfContactEl,
    applicationButtons
  );
  applicationTableEl.append(applicationEl);
};

// #### EDIT APPLICATION ####
const editApplication = application => {
  $("#editApplicationModal").modal();
  const editModalCompany = document.querySelector("#editModalCompany");
  const editModalRole = document.querySelector("#editModalRole");
  const editModalPOC = document.querySelector("#editModalPOC");
  editModalCompany.value = selectedApplication.company_name;
  editModalRole.value = selectedApplication.role;
  editModalPOC.value = selectedApplication.person_of_contact;
  editApplicationForm.setAttribute(
    "data-application_id",
    `${selectedApplication.id}`
  );
};

deleteApplicationButton.addEventListener("click", () =>
  deleteApplicationOnServer().then(() => {
    deleteApplicationOnUI();
    $("#editApplicationModal").modal("hide");
    renderApplicationsForTasks();
  })
);

editApplicationForm.addEventListener("submit", e => {
  e.preventDefault();

  selectedApplication.company_name = editApplicationForm.company_name.value;
  selectedApplication.role = editApplicationForm.role.value;
  selectedApplication.person_of_contact =
    editApplicationForm.person_of_contact.value;

  editApplicationOnServer(selectedApplication).then(() => {
    editApplicationOnUI(selectedApplication);
  });
});

const editApplicationOnServer = application => {
  const applicationsURL = "http://localhost:3000/applications";
  const applicationURL = `${applicationsURL}/${application.id}`;

  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(application)
  };

  return fetch(applicationURL, options)
    .then(response => {
      if (response.status === 200) {
        response.json();
      }
    })
    .then($("#editApplicationModal").modal("hide"));
};

const editApplicationOnUI = application => {
  const rowToEdit = document.querySelector(`#application-${application.id}`);
  const companyTd = rowToEdit.querySelector(".company_name");
  const roleTd = rowToEdit.querySelector(".role");
  const pocTd = rowToEdit.querySelector(".person_of_contact");

  companyTd.innerText = application.company_name;
  roleTd.innerText = application.role;
  pocTd.innerText = application.person_of_contact;

  const indexOfApplication = user.applications.findIndex(
    oldApplication => oldApplication.id === application.id
  );

  renderApplicationsForTasks();

  editApplicationForm.reset();
  md.showNotification("top", "left", "Your application has beed edited!");
};

// #### EDIT PROFILE ####
const editProfile = () => {
  const editedName = document.querySelector("#profileModalName").value;
  const editedEducation = document.querySelector("#profileModalEducation")
    .value;
  const editedEmail = document.querySelector("#profileModalEmail").value;
  const editedCity = document.querySelector("#profileModalCity").value;

  editProfileOnServer(
    editedName,
    editedEducation,
    editedEmail,
    editedCity
  ).then(resp => {
    editProfileOnUI(editedName, editedEducation, editedEmail, editedCity);
    $("#profileModal").modal("hide");
  });
};

const editProfileOnServer = (
  editedName,
  editedEducation,
  editedEmail,
  editedCity
) => {
  const usersURL = "http://localhost:3000/users";
  const userURL = `${usersURL}/${currentUserId}`;
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: currentUserId,
      name: editedName,
      education: editedEducation,
      email: editedEmail,
      city: editedCity
    })
  };

  return fetch(userURL, options).then(response => {
    if (response.status === 200) {
      response
        .json()
        .then(
          md.showNotification("top", "left", "Your profile has been edited.")
        );
    } else {
      md.showNotification(
        "top",
        "left",
        "Something is wrong. Please try again later."
      );
    }
  });
};

const editProfileOnUI = (
  editedName,
  editedEducation,
  editedEmail,
  editedCity
) => {
  user.name = editedName;
  user.education = editedEducation;
  user.email = editedEmail;
  user.city = editedCity;
  renderUsernameInNavbar();
};

// ADD TASK
const createNewTask = () => {
  $("#createNewTaskModal").modal();
};

const renderApplicationsForTasks = () => {
  const applicationsDropdown = document.querySelector(
    "#existingApplicationsforTasks"
  );

  applicationsDropdown.innerHTML = ``;

  user.applications.forEach(application => {
    const applicationDropdownItem = document.createElement("a");
    applicationDropdownItem.className = "dropdown-item";
    applicationDropdownItem.id = application.id;
    applicationDropdownItem.innerText = `${application.role} - ${
      application.company_name
    }`;
    applicationsDropdown.append(applicationDropdownItem);
  });
};

newTaskForm.addEventListener("submit", e => {
  e.preventDefault();
  createNewTaskOnServer().then(resp => createNewTaskOnUI(resp));
  $("#createNewTaskModal").modal("hide");
});

const createNewTaskOnServer = () => {
  const tempApplication = user.applications[0];
  const newTaskApplication = newTaskForm.querySelector(
    "#createNewTaskApplication"
  ).value;
  const newTaskName = `${
    newTaskForm.querySelector("#createNewTaskDescription").value
  } for ${tempApplication.company_name}`;
  const newTaskDeadline = newTaskForm.querySelector("#createNewTaskDeadline")
    .value;
  const newTaskStatus = false;

  const url = "http://localhost:3000/tasks";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      application_id: tempApplication.id,
      name: newTaskName,
      deadline: newTaskDeadline,
      status: newTaskStatus
    })
  };

  return fetch(url, options).then(resp => resp.json());
};

const createNewTaskOnUI = task => {
  renderDueTask(task);
};

// #### RENDER USERNAME IN NAVBAR ####
const renderUsernameInNavbar = () => {
  const usernameNavbar = document.getElementById("usernameNavbar");
  usernameNavbar.innerText = user.name;
};

// #### RENDER COVER LETTERS ####
const renderCoverLetters = () => {
  const userApplications = user.applications;

  const userCoverLetters = user.applications
    .map(application =>
      application.cover_letters.map(coverLetter => {
        return coverLetter;
      })
    )
    .flat();

  userApplications.forEach(application => {
    renderApplicationForCoverLettersTable(application);
  });
};

const renderApplicationForCoverLettersTable = application => {
  const coverLettersTable = document.querySelector("#coverLettersTable");
  const applicationEl = document.createElement("tr");

  if (application.cover_letters.length > 0) {
    applicationEl.innerHTML = `
      <td>
        ${application.company_name}
      </td>
      <td>
        ${application.role}
      </td>
      <td>
      <button id="cover-letter-button-${
        application.id
      }" class="btn btn-success btn-round">Edit</button>
      </td>    
  `;
  } else {
    applicationEl.innerHTML = `
      <td>
        ${application.company_name}
      </td>
      <td>
        ${application.role}
      </td>
      <td>
      <button id="cover-letter-button-${
        application.id
      }" class="btn btn-info btn-round">Add</button>
      </td>
  `;
  }

  const coverLetterButton = applicationEl.querySelector(
    `#cover-letter-button-${application.id}`
  );

  coverLetterButton.addEventListener("click", e => console.log("WORKS!"));
  coverLettersTable.append(applicationEl);
};

// #### SHOW LOGIN MODAL ####
const showLoginModal = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "modal-wrapper";
  wrapper.innerHTML = `
    <div class="fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first formHeader">
      <div>Please enter your email and password to log-in</div>
      </div>
      <!-- Login Form -->
      <form id="loginForm" >
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="password">
        <input type="submit" class="fadeIn fourth" value="Log In">
      </form>
      <!-- Remind Passowrd -->
      <div id="formFooter" class="createAccount"> You don't have an account?<br>
        <a class="underlineHover" href="#" > Create your account </a>
      </div>
    </div>
  </div>
  `;
  // const signinBtn = wrapper.querySelector('.signin-btn')
  // signinBtn.addEventListener('click', () => {
  //   wrapper.remove()
  // })
  document.body.append(wrapper);
};

// #### SHOW PROFILE MODAL ####
const showProfileModal = () => {
  $("#profileModal").modal();
  const profileModalName = document.querySelector("#profileModalName");
  const profileModalPicture = document.querySelector("#profileModalPicture");
  const profileModalEmail = document.querySelector("#profileModalEmail");
  const profileModalNameH4 = document.querySelector("#profileModalNameh4");
  const profileModalIndustry = document.querySelector("#profileModalIndustry");
  const profileModalCity = document.querySelector("#profileModalCity");

  profileModalName.value = user.name;
  profileModalPicture.src = user.image;
  profileModalEmail.value = user.email;
  profileModalEducation.value = user.education;
  profileModalNameH4.innerText = user.name;
  profileModalIndustry.innerText = user.industry;
  profileModalCity.value = user.city;
};

// #### SHOW COVER LETTERS MODAL ####
const showCoverLettersModal = () => {
  $("#coverLettersModal").modal();
};

const listenToForm = () => {
  loginForm.addEventListener("submit", e => {
    e.preventDefault(), login();
  });
};

// #### SHOW CREATE NEW APPLICATION MODAL ####
const showNewApplicationModal = () => {
  $("#createNewApplicationModal").modal();
};

createNewApplicationForm.addEventListener("submit", e => {
  e.preventDefault();
  createNewApplicationOnServer(e).then(resp => {
    $("#createNewApplicationModal").modal("hide"),
      md.showNotification(
        "top",
        "left",
        "A new application has been created. Good luck!"
      );
    createNewApplicationOnUI(resp);
    createNewApplicationForm.reset();
  });
});

// ####  CREATE NEW APPLICATION ON SERVER ####
const createNewApplicationOnServer = e => {
  const createNewApplicationForm = e.target;
  const newCompanyName = createNewApplicationForm.querySelector(
    "#createNewApplicationCompany"
  ).value;
  const newRoleName = createNewApplicationForm.querySelector(
    "#createNewApplicationRole"
  ).value;
  const newPOCName = createNewApplicationForm.querySelector(
    "#createNewApplicationPOC"
  ).value;

  const applicationsURL = "http://localhost:3000/applications";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: currentUserId,
      role: newRoleName,
      company_name: newCompanyName,
      person_of_contact: newPOCName
    })
  };

  return fetch(applicationsURL, options).then(resp => resp.json());
};

const createNewApplicationOnUI = resp => {
  renderApplication(resp);
  user.applications.push(resp);
  renderApplicationsForTasks();
};

// ####  DELETE APPLICATION FROM SERVER ####
const deleteApplicationOnServer = () => {
  const applicationId = selectedApplication.id;
  const applicationsURL = "http://localhost:3000/applications";
  const applicationURL = `${applicationsURL}/${applicationId}`;

  const options = {
    method: "DELETE"
  };

  return fetch(applicationURL, options).then(resp => resp.json());
};

const deleteApplicationOnUI = () => {
  const applicationToDeleteId = selectedApplication.id;
  user.applications = user.applications.filter(
    application => application.id !== applicationToDeleteId
  );
  renderApplications(user);
  renderTasks();
  md.showNotification("top", "right", "Your application has been deleted.");
};

// #### LOGIN ####
const login = () => {
  const userEmail = loginForm.querySelector("#login").value;
  const userPassword = loginForm.querySelector("#password").value;
  const SESSIONS_URL = "http://localhost:3000/sessions";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, password: userPassword })
  };
  return fetch(SESSIONS_URL, options).then(response => {
    if (response.status === 200) {
      response.json().then(id => {
        currentUserId = id;
        loadDashboard();
      });
      document.querySelector(".modal-wrapper").remove();
      md.showNotification("top", "center", "You have successfully logged in.");
    } else {
      md.showNotification(
        "top",
        "center",
        "Your password or email are incorect!"
      );
    }
  });
};

const showFindJobsModal = () => {
  $("#newJobsModal").modal();
  renderNewJobs();
};

const renderNewJobs = () => {
  newJobs.forEach(job => {
    renderNewJob(job);
  });
};

const renderNewJob = job => {
  const newJobsTableEl = document.querySelector("#newJobsTable");

  const newJobEl = document.createElement("tr");

  const newJobCompanyEl = document.createElement("td");
  newJobCompanyEl.className = "new_company_name";
  newJobCompanyEl.innerText = job.employerName;

  const newJobRoleEl = document.createElement("td");
  newJobRoleEl.className = "role";
  newJobRoleEl.innerText = job.jobTitle;

  const newJobApplyEl = document.createElement("td");
  newJobApplyEl.className = "td-actions text-right";
  newJobApplyEl.innerHTML = `
    <button id="newJobApplyButton" rel="tooltip" title="Apply" class="btn btn-primary btn-success btn-sm">Apply</button>`;

  const newJobApplyButton = newJobApplyEl.querySelector("#newJobApplyButton");
  newJobApplyButton.addEventListener("click", application => {
    createNewApplicationForm.querySelector(
      "#createNewApplicationCompany"
    ).value = job.employerName;
    createNewApplicationForm.querySelector("#createNewApplicationRole").value =
      job.jobTitle;
    $("#newJobsModal").modal("hide");
    $("#createNewApplicationModal").modal();
  });

  const newJobSeeMoreEl = document.createElement("td");
  newJobSeeMoreEl.className = "td-actions text-right";
  newJobSeeMoreEl.innerHTML = `
    <button id="seeMoreNewJobButton" rel="tooltip" title="See More" class="btn btn-primary btn-info btn-sm"><a  target="_blank" href="${
      job.jobUrl
    }">See More</a></button>`;

  newJobEl.append(
    newJobCompanyEl,
    newJobRoleEl,
    newJobApplyEl,
    newJobSeeMoreEl
  );
  newJobsTableEl.append(newJobEl);
};

const getReedJobs = () => {
  const url = `https://cors-anywhere.herokuapp.com/http://www.reed.co.uk/api/1.0/search?keywords=${user.industry.replace(
    '"',
    ""
  )}&location=${user.city.replace('"', "")}&distancefromlocation=3`;
  return fetch(url, {
    headers: {
      "X-Requested-With": "lol",
      Authorization:
        "Basic NjE5OTY4ZDgtN2IyNy00NjFmLWExYTktMzJlMWI3MWZhZWM1Og=="
    }
  }).then(resp => resp.json());
};

// #### LOGOUT ####
const logout = () => {
  const id = currentUserId;
  const sessionsURL = "http://localhost:3000/sessions";
  const sessionURL = `${sessionsURL}/${id}`;

  const options = {
    method: "DELETE"
  };
  return fetch(sessionURL, options).then(response => {
    if (response.status === 200) {
      response.json();
      currentUserId = null;
      newJobs = [];
      showLoginModal();
    } else {
      MessageEvent(response.json());
    }
  });
};

// #### INIT ####
const init = () => {
  if (currentUserId === null) {
    newJobs = [];
    showLoginModal();
    listenToForm();
  } else {
    getUser().then(resp => {
      user = resp;
      renderOngoingApplications(user);
      renderNoTasks(user);
      renderApplications();
    });
  }
};

const loadDashboard = () => {
  getUser().then(resp => {
    user = resp;
    getReedJobs().then(resp => (newJobs = resp.results));
    renderUsernameInNavbar(user);
    renderNoOngoingApplications(user);
    renderNoTasks(user);
    renderApplications();
    renderTasks();
    renderApplicationsForTasks();
    renderCoverLetters();
  });
};

init();
