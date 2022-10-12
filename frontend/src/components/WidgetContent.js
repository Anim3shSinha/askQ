import React from "react";
import "./css/widgetcontent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAA51BMVEUsv67///9psO5XW20rwa9aUGc3q6FnpNzu7+5ZU2k5qZ72yGPvUmH+0ZpVU2Bkru6x3MH2uGPz8u5fgqn/0pZYY3mgyO7K3e4AuadjtfW5vav7yVuRyNe03r+my+5ceJq1gqn0TVhuz8LO7emx5N1brvS7wcS95+H0+/qa29N8suGI18zk9fJHxbV7p+HiXXOo1sf7uFqgksGtvs9ikL99ufHPwZOjuMLj6e7pzKbouXzSx7XPuJJClJFQcHrqxnPKdZfMwaKSlsiBvuH/ylC81u5bb4uUts6rurn/uFDFuKPDep35R1D0j8TuAAAFr0lEQVR4nO2cf1vbNhDH5SRtBtvwxo8QoL+w01qJbTYgGdu6so6W0G19/69nsnSJZceW7xwJ/Me+/+lxHuuTk3SSTiczr5V4EkbTOAjSlAmlaRDE0yhMeLu3sRb1R3Eg6h6PWUFZOU3jqAUJEYJHcTouV19EGQsQIgcFgk8CU/06STChcKAheBgwFAFoEIRoDiQEn6QUAmWPFGsOFASfkoyQY7ApCgMBwaetCIADg9EI0aYhChSIRmmCCIOtECRGEG4FweOtESRGbDaGESLcriU0ijRqC2HHDIARt4JIbJkBKNKEDhHZJFCqbZI6iIlVMyiNJzSIbfyTgWJKgdjeOdRQBGgIHrhBkBRVHqMCgruyQy1FBYRLhuoW2YRw1xa1FBsQxnExQMtEsTFGyhAG/yDevIsWM3Bs+IsSRGRg2L3dIeh210ARmSCSeiMOPvSJ+mBok8QAkdYzPN8R791bq7rewvOd5/UUaT2EYe4e3IrXHs2HKx1UYOwdrB/Pj0T51tAgcR1EaBoYmSF6mpabEEv9eWYKw+vGYTUEr28M0RrP+v35iVbJfMMUe3Pt8cm8339maA+W8koI00JKQgz1f9pb7pVUMERv2AChN0gOYWyMCojesKQeCUJvkDWEeeqsgjCrEYLlU9kawryUcgGRO84VhKlXOoLI++YKomE9l0PMQKqqC5AqLUBIiPVMBhC8YQ2xgnh7egZ68MU4vDoHXYnR64++Udq/91EQbMwLEFPzr3OIX86+lTq7ySDenH8ndf5GQuwDxDESgk11CN7wY1cQjGsQjbsMRxAwQBhiaDi0hBogrNFZOoVQblNCNK9tXUGwYAXR2C0dQgw4QEzwEP6XP0GfREW9u59Ad6LgL34FvcJDyK7JUK2Re0zfotuWChREk7csQNicO5QpuIQwLPMfAyKSEHHzLyuaw+9VlGAC8wkQLM4gmj2VBuFf/waaiZr8Tz+Dsm7qz34H3eA7pvRXzEswm/D1EH1/+L3U4XVW7YuXP0i9fJGVbi5/lLr8gwIxTgQEpktQIU4oEJGAQEUrXULEAgLTJVxCCE/BUP3SKUTKmWEj/kgQAiF0AUEZHUwgoAZH7ifeHYIeFARIQjxcKv39DwliHDFc7HZjyb9QznIBJeU2F9p2gAAxZRinXZ478qnUB7WfO4RihosYupvAhAIyxAlIGeItSJlCf0aASBnKTeQQw9cgWevsPUh2g4t/PyrdOYZ4vQqJZGGZfKy8k5vCr2pP+PUjzU/gEHQIPTYkIMBrKIjVspcIgdX/EI8EQe2YDiDoo8MJBNFZuRmiRIjhHKSc8zVIla5AF1S33WYCy1WcwFq67Zg8ldufwMRUTlvUlP97fYm0qKEt73qLV0ojNYHdfJG6UWHNETxc0JojJC50/eN90Chb0J1+VkHNz6e+DJKACEGSTAlxyS8gIBqjIFZxG4CgR2qYXPLjDmNdQgTUbaADCLkNJG2IXUBE1NCAC4iEHCSxDyGDJKRwkYMhGpMDZ/7o+D7T8b3cdM3+AklntbiHhyMCBATOSCFEv+Co/ZoiwWNCCJEUTLU+gQX0sLJ1iHVYmRBgt28JTj9qsA4RtDh0sQ2hHbrgj59sQ2jHT/iDOMsQ+kEc/kjStiX0I0n04axliMLhrOchj6ntQpSOqfEH9hYhygf23Uhd6EQSBzWdZXlUoSUJoiKdhZbYMyynFikNCRBViT3EFKf5QYX0RKt2KU7EZK8GtU32akx7O8IztE57IyUANqh9AiAlFbJJ7VMhu5EU2on02G4kCncjZdp1AjsuebwbafTduFDgkgJ9tcJhixAumXjduG7TjYtH3biC1Y3LaF4nruV5Vi8oGm9rdv+qpteJS6teN67vep24yCz19Fe6M2WNQuWwfLldYoTBgIRh/5q/4njyDx4Ax5N/+gE4nvwjGDmJ/BxIuvocSLrV50D+A2YOKyBxgr0oAAAAAElFTkSuQmCC"
          alt="img"
        />
        <div className="widget__contentTitle">
          <h5>Mobile app programmer</h5>
        </div>
        <p>The best Mobible contnet</p>
      </div>
    </div>
  );
}

export default WidgetContent;
