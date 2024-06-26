# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks.all
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_path, notice: "Task was successfully created." }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def toggle
    @task = Task.find(params[:id])
    @task.update(status: params[:status])

    render json: { message: "Success" }
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :category_id).merge(user: current_user)
  end
end
