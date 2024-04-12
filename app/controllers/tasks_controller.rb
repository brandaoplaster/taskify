# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @task = Task.new
  end
end
