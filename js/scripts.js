$(".section").hide();

setTimeout(function() {
  $(document).ready(function() {
    $(".section").fadeIn();
    $(".loader").fadeOut();

    // Js Counter
    $(".count").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 1000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    // Material side nav
    $(".sidenav").sidenav();

    // Canvas js
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Daily Visitors"
      },
      axisY: {
        includeZero: false
      },
      data: [
        {
          type: "line",
          dataPoints: [
            {
              y: 450
            },
            {
              y: 414
            },
            {
              y: 520,
              indexLabel: "highest",
              markerColor: "red",
              markerType: "triangle"
            },
            {
              y: 460
            },
            {
              y: 450
            },
            {
              y: 500
            },
            {
              y: 480
            },
            {
              y: 480
            },
            {
              y: 410,
              indexLabel: "lowest",
              markerColor: "DarkSlateGrey",
              markerType: "cross"
            },
            {
              y: 500
            },
            {
              y: 480
            },
            {
              y: 510
            }
          ]
        }
      ]
    });
    chart.render();

    // Approve Comment Toast
    $(".approve").click(function(e) {
      M.toast({
        html: "Comment approved",
        displayLength: 2000,
        classes: "easeOut"
      });
      e.preventDefault();
    });

    // Deny Comment Toast
    $(".deny").click(function(e) {
      M.toast({
        html: "Comment Denied",
        displayLength: 2000,
        classes: "easeOut"
      });
      e.preventDefault();
    });
    // Delete todos item
    $(".todos").on("click", ".delete", function(e) {
      if (e.target.classList.contains("delete")) {
        $(this)
          .parent()
          .parent()
          .parent()
          .remove();
        M.toast({
          html: "Todo Item deleted",
          displayLength: 2000,
          classes: "easeOut"
        });
      }
      e.preventDefault();
    });

    // Add Todos item
    $("#todo-form").on("submit", function(e) {
      e.preventDefault();
      let todo = document.querySelector("#todo");
      console.log(todo.value);
      if (todo.value === "") {
        M.toast({
          html: "Please eneter a todo item",
          displayLength: 2000,
          classes: "easeOut"
        });
      } else {
        let output = `<li class="collection-item"><div>${
          todo.value
        }<a href="#" class="secondary-content"><i class="material-icons red-text delete">close</i></a></div></li>`;
        $(".todos").append(output);
        todo.value = "";
        M.toast({
          html: "Todo Item Added",
          displayLength: 2000,
          classes: "easeOut"
        });
      }
    });
    $(".fixed-action-btn").floatingActionButton();
    $(".modal").modal();
    $("select").formSelect();
    CKEDITOR.replace("body");
   
  });
}, 1000);
